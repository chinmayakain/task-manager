const mongoose = require("mongoose");

const connectDb = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true, // for solving deprecation warnings, Otherwise not needed.
    useCreateIndex: true, // for solving deprecation warnings, Otherwise not needed.
    useFindAndModify: false, // for solving deprecation warnings, Otherwise not needed.
    useUnifiedTopology: true, // for solving deprecation warnings, Otherwise not needed.
  });
};

module.exports = connectDb;
