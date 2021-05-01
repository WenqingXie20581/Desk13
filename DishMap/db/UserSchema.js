const mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  emailAddress: {
    type: String,
    unique: true,
  },
  username: String,
  password: String,
  likedRecipeIds: [String],
  accomplishedRecipeIds: [String],
  uploadedRecipeIds: [String],
});

module.exports = mongoose.model("User", UserSchema);
