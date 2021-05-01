const mongoose = require("mongoose");

var IngredientSchema = new mongoose.Schema({
  name: String,
  quantity: String,
  treatment: String,
});

var RecipeSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  title: {
    type: String,
    index: true,
  },
  nationality: String,
  introduction: String,
  ingredients: [IngredientSchema],
  directions: [String],
  imgUrl: String,
  popularity: {
    type: Number,
    default : 1
  }
});

/**
 * Find record by recipe title
 * @param {*} title
 * @param {*} callback
 */
RecipeSchema.statics.findByTitle = function (title, callback) {
  this.find({ title: title }, (err, doc) => {
    callback(err, doc);
  });
};

RecipeSchema.statics.findByRecipeId = function (id, callback) {
  this.find({ id: id }, (err, doc) => {
    callback(err, doc);
  });
};

module.exports = mongoose.model("Recipe", RecipeSchema);
