import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgWhite.blue
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgWhite.red);
  }
};

export default connectDB;