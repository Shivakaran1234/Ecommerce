import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on("connected", () => {
        console.log("DB Connected");
    });

    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/Ecommerce-MERN`);
    } catch (error) {
        console.log("MONGODB Connection Error: ", error);
        process.exit(1);
    }
};

export default connectDB;
