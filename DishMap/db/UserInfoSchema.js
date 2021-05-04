const mongoose = require("mongoose");

var UserInfoSchema = new mongoose.Schema({
  username: {
    type : String,
    unique: true
  },
  email : {
    type : String,
    unique : true
  },
  password: String
})

module.exports = mongoose.model("UserInfo", UserInfoSchema, "userinfo");
