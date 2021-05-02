const { number } = require("echarts");
const express = require("express");
const router = express.Router();
const fs = require('fs');
const path = require('path');
var multer = require('multer');


const RecipeOperation = require("../../db/RecipeOperations");
const RecipeModel = require("../../db/RecipeSchema");

router.use(express.json());
var upload = multer({dest:'./uploadImg/'});
var imgServer = express();
imgServer.use(upload.any());

/* GET api listing. */
router.get("/", (req, res) => {
  res.send("api works");
});

//Recipe

const NATIONS = [
  "China",
  "Italy",
  "Japan",
  "Russia",
  "Germany",
  "Thailand",
  "Mexico",
  "Spain",
];

const RECIPES = [
  {
    id: 1,
    title: "burgerTest",
    nationality: "Germany",
    ingredients: [{ name: "beef", quantity: "1 kg", treatment: "null" }],
    directions: ["fry", "done"],
  },
  {
    id: 2,
    title: "hot potTest",
    nationality: "China",
    ingredients: [
      { name: "beef", quantity: "1 kg", treatment: "null" },
      { name: "chili", quantity: "200 g", treatment: "null" },
    ],
    directions: ["boil", "done"],
  },
];

router.get("/recipe", (req, res) => {
  const recipe = RECIPES.find((r) => r.id === 1);
  res.send(recipe);
});

var findById = function findById(id, callback) {
  RecipeModel.find({ id: id }, callback);
};

router.get("/recipe/:id", (req, res) => {
  // const recipe = RECIPES.find(r => (r.id === parseInt(req.params.id)));
  // const recipe = RecipeOperation.findById(parseInt(req.params.id));
  const recipe = findById(req.params.id, function (err, doc) {
    if (err) {
      throw err;
    }
    console.log(req.params.id);
    console.log(doc);
    res.send(doc);
  });
});

var findByTitle = function findByTitle(title, callback) {
  RecipeModel.find({ title: title }, callback);
};

router.get("/recipe/:title", (req, res) => {
  const recipe = findByTitle(req.params.title, function (err, doc) {
    if (err) {
      throw err;
    }
    console.log(req.params.title);
    console.log(doc);
    res.send(doc);
  });
});

/**
 * 因为数据结构改变，因此不需要再进行 id 自增
 */
router.post("/recipe/upload", (req, res) => {
  // var idObj = RecipeOperation.getIdNum();
  // if (!idObj) {
  //   var idNum = 1;
  // } else {
  //   var idNum = idObj.id + 1;
  // }
  const recipe = {
    // id: 1,
    title: req.body.title,
    introduction: req.body.introduction,
    nationality: req.body.nationality,
    ingredients: req.body.ingredients,
    directions: req.body.directions,
    // imgUrl: req.body.imgUrl,
    popularity: req.body.popularity,
    // pictureFile : req.body.pictureFile
  };
  RecipeOperation.insert(recipe);
  var pathName = "./uploadImg";
  var data = req.body.pictureFile;
  console.log('pictureFile:' + data);
  fs.writeFileSync(pathName + '/' + '1.jpg', data);
});

// router.post("/recipe/upload", upload.single('uploadRecipe'), (req, res) => {
//     const recipe = {
//     title: req.body.title,
//     introduction: req.body.introduction,
//     nationality: req.body.nationality,
//     ingredients: req.body.ingredients,
//     directions: req.body.directions,
//     popularity: req.body.popularity,
//     };
//     RecipeOperation.insert(recipe);

//     console.log('pictureFile: ' + req.body.pictureFile);

//     let name = '1.jpg';
//     fs.writeFile(path.join(__dirname, '../../uploadImg/' + name),req.body.pictureFile, (err)=> {
//       if(err) {
//         throw err;
//       }
//     })

//   //   fs.readFile(req.file.path, (err, data)=> {
//   //   if (err) {
//   //     return res.send('upload failed');
//   //   }
//   //   let name = '1.' + req.file.mimetype.split('/')[1];
//   //   fs.writeFile(path.join(__dirname, '../../uploadImg/' + name), data, (err)=> {
//   //     if(err) {
//   //       throw err;
//   //     }
//   //   })
//   // })

// });

// router.post("/recipe/upload/img", uploadImg.single('img'), (req, res) => {
//   fs.readFile(req.file.path, (err, data)=> {
//     if (err) {
//       return res.send('upload failed');
//     }
//     let name = '1.' + req.file.mimetype.split('/')[1];
//     fs.writeFile(path.join(__dirname, '../../uploadImg/' + name), data, (err)=> {
//       if(err) {
//         throw err;
//       }
//     })
//   })
// })


router.post("/recipe/feedback", (req, res) => {});

router.post("/recipe/favour", (req, res) => {});

router.post("/user/register", (req, res) => {});

router.post("/user/login", (req, res) => {});

router.post("/user/logout", (req, res) => {});

module.exports = router;
