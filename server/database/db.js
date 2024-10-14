//MongoDB Connection...
// import mongoose from "mongoose";

import mongoose from "mongoose";

const Connection = async () => {
  const URI =
    `mongodb+srv://pratham:Pratham%40123@cluster0.vr9pe.mongodb.net/`;

  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully...");
  } catch (error) {
    console.error("Error while connecting to the database:", error.message);
  }
};

export default Connection;
