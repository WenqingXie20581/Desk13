const recipe = require("./RecipeOperations.js");
//新增
// recipe.insert({
//   id: 1,
//   title: "xxx",
//   nationality: "Germany",
//   introduction:
//     'It is named after the sound of "Gudong" when food is put into boiling water. It is one of the original Chinese delicacies, and it is also a kind of food suitable for all ages',
//   ingredients: [{ name: "beef", quantity: "1 kg", treatment: "null" }],
//   directions: ["fry", "done"],
//   imgUrl: null,
//   popularity: 11,
// });

// //删除
// recipe.removeById(1);
// recipe.findById(3);

// recipe.findByTitle("burger");

recipe.increasePopularity(1);
recipe.findPopularity(1);
