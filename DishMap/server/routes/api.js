//todo 把error恰当地返回

const { number } = require("echarts");
const express = require("express");
const router = express.Router();

const RecipeOperation = require("../../db/RecipeOperations");
const RecipeModel = require("../../db/RecipeSchema");

const tools = require("../tools.js");

router.use(express.json());

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

router.get("/recipe", (req, res) => {
  findAll(function (err, doc) {
    if (err) {
      throw err;
    } else {
      res.send(doc);
      console.log(doc);
    }
  });
});

var findAll = function findAll(callback) {
  RecipeModel.find({}, callback);
};

var findById = function findById(_id, callback) {
  RecipeModel.findOne({ _id, _id }, callback);
};

router.get("/recipe/:id", (req, res) => {
  // const recipe = RECIPES.find(r => (r.id === parseInt(req.params.id)));
  // const recipe = RecipeOperation.findById(parseInt(req.params.id));
  findById(req.params.id, function (err, doc) {
    if (err) {
      console.log(err);
    }
    res.send(doc);
  });
});

/**
 * 因为数据结构改变，因此不需要再进行 id 自增
 */
router.post("/recipe/upload", tools.multer().single("file"), (req, res) => {
  res.send({
    body: req.body,
    file: req.file,
  });

  // var recipe = {
  //   // id: idNum,
  //   title: req.body.title,
  //   //introduction没存上？
  //   introduction: req.body.introduction,
  //   nationality: req.body.nationality,
  //   ingredients: req.body.ingredients,
  //   directions: req.body.directions,
  //   imgUrl: req.body.imgUrl,
  //   popularity: req.body.popularity,
  // };
  // RecipeOperation.insert(recipe);
});

router.post("/recipe/feedback", (req, res) => {});

router.post("/recipe/favour", (req, res) => {});

router.post("/user/register", (req, res) => {});

router.post("/user/login", (req, res) => {});

router.post("/user/logout", (req, res) => {});

module.exports = router;

// const RECIPES = [
//   {
//     id: 1,
//     title: "burgerTest",
//     nationality: "Germany",
//     ingredients: [{ name: "beef", quantity: "1 kg", treatment: "null" }],
//     directions: ["fry", "done"],
//   },
//   {
//     id: 2,
//     title: "hot potTest",
//     nationality: "China",
//     ingredients: [
//       { name: "beef", quantity: "1 kg", treatment: "null" },
//       { name: "chili", quantity: "200 g", treatment: "null" },
//     ],
//     directions: ["boil", "done"],
//   },
// ];
