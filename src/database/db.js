const mongoose = require("mongoose");

//@func connectDB
//@desc connects application to mongodb instance in order to acess database
const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}`, {
      useNewUrlParser: true,
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error("Exit process with failure", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
