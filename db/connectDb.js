import mongoose from "mongoose";

const connectDb = async () => {
  console.log("DB Connected")
  try {
    if (mongoose.connection.readyState >= 1) {
      return;
    }
    // const conn = await mongoose.connect(`mongodb://localhost:27017/chai`, {
    //   useNewUrlParser: true,
    // });
    const conn = await mongoose.connect(`${process.env.MONGODB_URI}/chai`);
    console.log(`MongoDB Connected: {conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
export default connectDb;