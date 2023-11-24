import { connect } from "mongoose";

const URL = "mongodb://localhost:27017/flowDB";

export const mainConnection = async () => {
  try {
    await connect(URL).then(() => {
      console.log("Database connected");
    });
  } catch (error) {
    console.log(error);
  }
};
