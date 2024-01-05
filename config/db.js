import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.DATABASE_URL)
        console.log(`Database connected at ${mongoose.connection.host}`)
    } catch (error) {
        console.log(error);
    }
}

export default connectDb