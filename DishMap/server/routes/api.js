//todo 把error恰当地返回

const { number } = require("echarts");
const express = require("express");
const router = express.Router();

const RecipeOperation = require("../db/RecipeOperations");
const RecipeModel = require("../db/RecipeSchema");

const UserOperation = require("../db/UserOperations");
const UserModel = require("../db/UserSchema");
const UserInfoModel = require("../db/UserInfoSchema");
const UserDataModel = require("../db/UserDataSchema");

const JwtUtil = require("../jwt");
const verify = require("./verifyToken");
const tools = require("../tools");

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
  // res.send(req.userid); 能提取出来userid
  RecipeModel.find({}, function (err, doc) {
    if (err) {
      res.status(400).send("db error");
    } else {
      res.send(doc);
    }
  });
});

// router.get("recipes/:nation", (req, res) => {
//   RecipeModel.find({"nationality":req.params.nation}, function (err, doc) {
//     if (err) {
//       console.log(err);
//     }
//     res.send(doc);
//   });
// })

//favour喜欢
router.post("/recipe/favour", verify, async (req, res) => {
  const userid = req.token.userid;
  const recipeId = req.body._id;
  //先检查recipe和userdata是否存在
  const recipe = await RecipeModel.findOne({ _id: recipeId });
  if (!recipe) {
    return res.status(400).send("Recipe doesn't exists");
  }

  var userdata = await UserDataModel.findOne({ userid: userid });
  if (!userdata) {
    return res.send("database error, empty userdata");
  }

  //检查是否重复favour
  if (userdata.likedRecipeIds.indexOf(recipeId) != -1) {
    return res.send("duplicate favour request");
  }
  //添加recipeId，修改popularity
  userdata.likedRecipeIds.push(recipeId);
  const newPopularity = recipe.popularity + 1;

  //添加到db
  try {
    await RecipeModel.updateOne(
      { _id: recipeId },
      { popularity: newPopularity }
    );

    await UserDataModel.updateOne(
      { userid: userid },
      { likedRecipeIds: userdata.likedRecipeIds }
    );
    res.send("favour successfully");
  } catch (err) {
    res.send(err);
  }
});

//complete完成
router.post("/recipe/complete", verify, async (req, res) => {
  const userid = req.token.userid;
  const recipeId = req.body._id;

  //先检查recipe和userdata是否存在
  const recipe = await RecipeModel.findOne({ _id: recipeId });
  if (!recipe) {
    return res.status(400).send("Recipe doesn't exists");
  }
  console.log(userid);
  var userdata = await UserDataModel.findOne({ userid: userid });
  if (!userdata) {
    return res.send("database error, empty userdata");
  }

  //检查是否重复完成
  if (userdata.completedRecipeIds.indexOf(recipeId) != -1) {
    return res.send("duplicate complete request");
  }
  //添加recipeId
  userdata.completedRecipeIds.push(recipeId);

  //添加到db
  try {
    await UserDataModel.updateOne(
      { userid: userid },
      { completedRecipeIds: userdata.completedRecipeIds }
    );
    res.send("complete successfully");
  } catch (err) {
    res.send(err);
  }
});

router.get("/recipe/:id", (req, res) => {
  // const recipe = RECIPES.find(r => (r.id === parseInt(req.params.id)));
  // const recipe = RecipeOperation.findById(parseInt(req.params.id));
  const _id = req.params.id;
  RecipeModel.findOne({ _id, _id }, function (err, doc) {
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
  // var recipe = JSON.parse(req.body);
  // console.log(req.body.recipeJSON);

  const recipeStr = req.body.recipeJson;
  const recipe = JSON.parse(recipeStr);
  handleUpdate(recipe, function (err, doc) {
    if (err) {
      // console.log(err);
      res.send({
        body: req.body,
      });
    } else {
      res.send({
        body: "successful",
      });
    }
  });
});

var handleUpdate = function handleUpdate(recipeData, done) {
  var recipe = {
    title: recipeData.title,
    introduction: recipeData.introduction,
    nationality: recipeData.nationality,
    ingredients: recipeData.ingredients,
    directions: recipeData.directions,
    popularity: 0,
    imgUrl: "",
  };
  // console.log(recipe);
  var instance = new RecipeModel(recipe);
  instance.save(done);
};

router.get("/user/profile/:id", (req, res) => {
  UserInfoModel.find({ id: id }, (err, doc) => {
    if (err) {
      return err;
    }
    console.log("req.body" + req.body);
    console.log(doc);
    res.send(doc);
  });
});

router.get("/user/accomplishment/:id", (req, res) => {});

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

/*


router.post("/recipe/feedback", (req, res) => {});

router.post("/recipe/favour", (req, res) => {});

router.post("/user/register", (req, res) => {});

router.post("/user/login", (req, res) => {});

router.post("/user/logout", (req, res) => {});

*/
