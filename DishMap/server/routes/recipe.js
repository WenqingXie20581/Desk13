const recipes = [
    {id: 1, },
    {id: 2, }
]

var RecipeModel = require('../../model/collection/RecipeModel.js');

exports.recipeInsert = function (req, res) {
  console.log(req.body.content);
  var json = req.body.content;
  if (json._id) {

  } else {
    RecipeModel.save(json, (err) => {
      if (err) {
        res.send({'success':false,'err':err});
      } else {
        res.send({'success':true});
      }
    })
  }
}

exports.recipeJSON = function(req, res) {
  RecipeModel.findByTitle(req.param.title, (err, doc) => {
    if (err) {
      throw err;
    }
    res.send(doc);
  })
}


// exports.recipeInsert(collectionName, insertData) {
//     return new Promise((resolve, reject) => {
//       collectionName.insertMany(insertData, (err) => {
//         if (err) {
//           throw err;
//         }
//         resolve();
//       })
//     })
//   }





exports.list= function(req,res){
    res.render
}
