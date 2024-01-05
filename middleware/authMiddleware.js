import JWT from "jsonwebtoken"

const userAuth = async (req,res,next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith("Bearer")) {
        return next({msg:"You are not logged in",status:401})
    }

    const token = authHeader.split(" ")[1];

    try {
        const payload = JWT.verify(token,process.env.JWT_SECRET);
        req.user = {userId: payload.userId};
        next();
    } catch (error) {
        next({msg:error.message})
    }
}

export default userAuth;