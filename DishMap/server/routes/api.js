const { number } = require("echarts");
const express = require("express");
const router = express.Router();

const RecipeOperation = require("../../db/RecipeOperations");
const RecipeModel = require("../../db/RecipeSchema");

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
  RecipeModel.findOne({id, id}, callback);
}

router.get("/recipe/:id", (req, res) => {
  // const recipe = RECIPES.find(r => (r.id === parseInt(req.params.id)));
  // const recipe = RecipeOperation.findById(parseInt(req.params.id));
  const recipe = findById(req.params.id, function(err, doc) {
    if (err) {
      throw err;
    }
    res.send(doc);
  })
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
    // id: idNum,
    title: req.body.title,
    introduction: req.body.introduction,
    nationality: req.body.nationality,
    ingredients: req.body.ingredients,
    directions: req.body.directions,
    imgUrl: req.body.imgUrl,
    popularity: req.body.popularity
  };
  RecipeOperation.insert(recipe);
});

router.post("/recipe/feedback", (req, res) => {});

router.post("/recipe/favour", (req, res) => {});

router.post("/user/register", (req, res) => {});

router.post("/user/login", (req, res) => {});

router.post("/user/logout", (req, res) => {});



module.exports = router;
