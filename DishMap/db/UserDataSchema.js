const mongoose = require("mongoose");


var AccomplishmentSchema = new mongoose.Schema({
  likedRecipeIds : [String],
  completedRecipeIds: [String],
  uploadRecipeIds : [String]
});


var UserDataSchema = new mongoose.Schema({
  username: {
    type : String,
    unique : true
  },
  accomplishment : AccomplishmentSchema
})


module.exports = mongoose.model("UserData", UserDataSchema, "userdata");
