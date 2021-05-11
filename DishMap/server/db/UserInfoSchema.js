const mongoose = require("mongoose");

var UserInfoSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
    // unique: true, 在插入前做校验
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024, //会hash，弄长一点
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("UserInfo", UserInfoSchema, "userinfo");
