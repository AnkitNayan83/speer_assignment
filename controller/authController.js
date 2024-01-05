import User from "../models/userModel.js";

export const register = async (req, res, next) => {
  const { email, password, name } = req.body;

  if (!name) return next({msg:"name is required",status:400});

  if (!email) return next({msg:"email is required",status: 400});

  if (!password) return next({msg:"password is required",status:400});

  const emailCheck = await User.findOne({ email });

  if (emailCheck) return next({msg:"This emai is already been used",status:400});

  //we will hash password at model(as it is more secure) by using mongoose middleware

  const user = new User(req.body);
  await user.save();

  const token = user.createJWT();

  res.status(201).json({
    success: true,
    message: "user registered",
    user: {
      name: user.name,
      email: user.email,
      token,
    },
  });
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!password) return next({msg:"password is required",status:400});

  if (!email) return next({msg:"email is required",status: 400});

  let user = await User.findOne({ email }).select("+password");

  if (!user) return next({msg:"wrong email id or password",status:401});

  const check = await user.comparePassword(password);

  if (!check) return next({msg:"wrong email id or password",status:401});

  const token = user.createJWT();

  user.password = undefined;

  user = { ...user._doc, token };

  res.status(200).json({
    message: "logged in successfully",
    success: true,
    token,
    user,
  });
};