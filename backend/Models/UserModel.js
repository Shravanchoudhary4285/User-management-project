const mongoose = require("mongoose");
const userschema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
  },
  mobile: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
    trim: true,
  },
  otp: {
    type: Number,
    // trim: true,
  },
  address: {
    type: Object,
    state: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
    pincode: {
      type: Number,
      trim: true,
    },
  },
  role: String,
  status: Number,
  info: String,
});
const UserModel = mongoose.model("user", userschema);
module.exports = UserModel;
