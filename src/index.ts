import express from "express";
const app = express();
import dotenv from "dotenv";
import connectDB from "./db/connect";

dotenv.config();

app.use(express.json());
const PORT = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`App listening at port ${PORT}`);
    });
  } catch (error) {
    console.log(`error: ${error}`);
  }
};

start();
