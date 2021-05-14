//todo 把error恰当地返回

const express = require("express");
const router = express.Router();
const RecipeModel = require("../db/RecipeSchema");
const UserDataModel = require("../db/UserDataSchema");
const FeedbackModel = require("../db/FeedbackSchema");

const verify = require("./verifyToken");
const tools = require("../tools");
const { feedbackValidation } = require("./validation");

router.use(express.json());

/* GET api listing. */
router.get("/", (req, res) => {
  res.send("api works");
});

//获取所有recipes
router.get("/recipe", (req, res) => {
  // res.send(req.userid); 能提取出来userid
  RecipeModel.find({}, function (err, doc) {
    if (err) {
      console.log(err);
      res.status(400).send("db error");
    } else {
      res.send(doc);
    }
  });
});

//获取指定的recipe
router.get("/recipe/:id", (req, res) => {
  // const recipe = RECIPES.find(r => (r.id === parseInt(req.params.id)));
  // const recipe = RecipeOperation.findById(parseInt(req.params.id));
  const _id = req.params.id;
  RecipeModel.findOne({ _id, _id }, function (err, doc) {
    if (err) {
      console.log(err);
      res.status(400).send("db error");
    }
    res.send(doc);
  });
});

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

//上传
router.post(
  "/recipe/upload",
  verify,
  tools.multer().single("file"),
  async (req, res) => {
    const recipeStr = req.body.recipeJson;
    const recipeData = JSON.parse(recipeStr);
    const recipe = new RecipeModel({
      title: recipeData.title,
      introduction: recipeData.introduction,
      nationality: recipeData.nationality,
      ingredients: recipeData.ingredients,
      directions: recipeData.directions,
      popularity: 0,
      imgUrl: req.filepath,
    });

    const userid = req.token.userid;
    var userdata = await UserDataModel.findOne({ userid: userid });
    if (!userdata) {
      return res.send("database error, empty userdata");
    }

    try {
      const savedRecipe = await recipe.save();
      //添加recipeId
      userdata.uploadRecipeIds.push(savedRecipe._id);
      await UserDataModel.updateOne(
        { userid: userid },
        { uploadRecipeIds: userdata.uploadRecipeIds }
      );
      res.send({message: "upload successfully."});
    } catch (err) {
      res.status(400).send(err);
    }
  }
);

//feedback 不登陆也行
router.post("/recipe/feedback", async (req, res) => {
    if(typeof req.body.advice == "undefined" || req.body.advice == null || req.body.advice == "") {
        req.body.advice = " ";
    }
  //Validate feedback内容
  const { error } = feedbackValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const feedback = new FeedbackModel({
    name: req.body.name,
    email: req.body.email,
    questions: req.body.questions,
    advice: req.body.advice,
  });

  try {
    await feedback.save();
    res.send({message: "upload successfully."});
  } catch (err) {
    res.status(400).send(err);
  }
});


module.exports = router;
