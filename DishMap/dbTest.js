var RecipeModel = require('./model/collection/RecipeModel.js');
var dbOperation = require('./model/dbOperation.js');


RecipeModel.find({}, (err, doc)=>{
  if (err) {
    throw err;
  }
  console.log(JSON.stringify(doc, undefined, 2));
})


RecipeModel.findByTitle('burger', (err, doc)=>{
  if (err) {
    throw err;
  }
  console.log(JSON.stringify(doc, undefined, 2));
})

RecipeModel.findByRecipeId(1, (err, doc)=>{
  if (err) {
    throw err;
  }
  console.log(JSON.stringify(doc, undefined, 2));
})



