const recipe = require("./RecipeOperations.js");
// // 新增;
// recipe.insert({
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

// recipe.increasePopularity(1);

recipe.findById("608d588dab2b643c64689fee", function (err, doc) {
  if (err) {
    return console.log(err);
  } else {
    console.log(JSON.stringify(doc, undefined, 2));
  }
});

// recipe.findByTitle("burger"); 这种写法获取不到结果，结果得在回调函数里获取
recipe.findByTitle("xxx", function (err, doc) {
  if (err) {
    return console.log(err);
  } else {
    console.log(JSON.stringify(doc, undefined, 2));
  }
});
