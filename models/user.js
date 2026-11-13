const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: string,
      required: true,
      unique: true,
    },
    pass: {
      type: string,
      required: true,
    },
  },
  {
    timestamp : true
  },
);

module.exports = mongoose.model('user', userSchema)

