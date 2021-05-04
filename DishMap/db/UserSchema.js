const mongoose = require("mongoose");

var AccomplishmentSchema = new mongoose.Schema({
  likedRecipeIds : [String],
  completedRecipeIds: [String],
  uploadRecipeIds : [String]
});

var ProfileSchema = new mongoose.Schema({
  email: String
});

var CredentialSchema = new mongoose.Schema({
  username: String,
  password: String
});


var UserSchema = new mongoose.Schema({
  email : {
    type : ProfileSchema,
    unique : true,
  },
  Credential : CredentialSchema,
  Accomplishment : AccomplishmentSchema
});

// var UserSchema = new mongoose.Schema({
//   emailAddress: {
//     type: String,
//     unique: true,
//   },
//   username: String,
//   password: String,

//   likedRecipeIds: [String],
//   accomplishedRecipeIds: [String],
//   uploadedRecipeIds: [String],
// });

module.exports = mongoose.model("User", UserSchema);
