var mongoose = require("mongoose");
var config = require("config");
const db = config.get("mongoURI");


const connectdb = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log("Connected to mongodb");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectdb;