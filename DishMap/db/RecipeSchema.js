const mongoose = require("mongoose");

var IngredientSchema = new mongoose.Schema({
  name: String,
  quantity: String,
  treatment: String,
});

var RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    index: true,
  },
  nationality: String,
  introduction: String,
  ingredients: [IngredientSchema],
  directions: [String],
  imgUrl: String,
  popularity: Number,
});

module.exports = mongoose.model("Recipe", RecipeSchema);
