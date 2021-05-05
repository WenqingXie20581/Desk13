const mongoose = require("mongoose");

var AccomplishmentSchema = new mongoose.Schema({
  likedRecipeIds: [String],
  completedRecipeIds: [String],
  uploadRecipeIds: [String],
});

var UserDataSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
  },
  accomplishment: AccomplishmentSchema,
});

// var entitySchema = mongoose.Schema({
//   testValue: { type: String },
// });

// var counter = mongoose.model("UserData", UserDataSchema, "userdata");

// entitySchema.pre("save", function (next) {
//   var doc = this;
//   counter
//     .findByIdAndUpdateAsync(
//       { _id: "entityId" },
//       { $inc: { seq: 1 } },
//       { new: true, upsert: true }
//     )
//     .then(function (count) {
//       console.log("...count: " + JSON.stringify(count));
//       doc.sort = count.seq;
//       next();
//     })
//     .catch(function (error) {
//       console.error("counter error-> : " + error);
//       throw error;
//     });
// });

// entitySchema.pre("save", function (next) {
//   var doc = this;
//   counter.findByIdAndUpdate(
//     { _id: "entityId" },
//     { $inc: { seq: 1 } },
//     function (error, counter) {
//       if (error) return next(error);
//       console.log("...count: " + JSON.stringify(count));
//       doc.testvalue = counter.seq;
//       next();
//     }
//   );
// });

module.exports = mongoose.model("UserData", UserDataSchema, "userdata");
