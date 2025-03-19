import mongoose from "mongoose";

let urlSprint2 = process.env.URI_MONGO
console.log("urlSprint2 up and running");


async function connectDB() {
    try {
        await mongoose.connect(process.env.URI_MONGO)
        console.log("database conected");
    } catch (error) {
        console.log(error);
    }
}
connectDB();