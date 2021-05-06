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

router.get("/recipe", verify, (req, res) => {
    // res.send(req.userid); 能提取出来userid
  RecipeModel.find({}, function (err, doc) {
    if (err) {
      res.status(400).send("db error");
    } else {
      res.send(doc);
    }
  });
});

// var findAll = function findAll(callback) {
//   RecipeModel.find({}, callback);
// };

// var findById = function findById(_id, callback) {
//   RecipeModel.findOne({ _id, _id }, callback);
// };

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

// // login
// // username or password 错误的时候返回错误信息?
// // TODO: login.component.ts, 只要返回携带 data，就认为登陆成功
// // TODO: token 校验，server.js 30-47
// router.post('/auth/signin', (req,res)=>{
//   const { username, password } = req.body;
//   UserInfoModel.findOne({'username': username, 'password': password}, (err, doc) => {
//     if (err) {
//       console.log('err: ' + err);
//       return err;
//     } else if (doc){
//       let jwt = new JwtUtil(username);
//       let token = jwt.generateToken();
//       console.log('login username: ' + req.body.username + 'password: ' + req.body.password);
//       res.send({status: 200, msg: 'Log in success!', token: token});
//     } else {
//       console.log('Incorrect: username: ' + req.body.username + 'password: ' + req.body.password);
//       return err;
//       // res.send({status: 200, msg: 'Username or password is incorrect.'});
//     }
//   });
// });

// // register
// router.post('/auth/signup', (req,res)=>{
//   const {username, email, password} = req.body;
//   UserInfoModel.findOne({$or: [{'username': username}, {'email': email}]}, (err, doc) => {
//     if (err) {
//       console.log(err);
//       return err;
//     } else if (doc) {
//       // console.log('Duplicate user: ' + doc);
//       res.send(doc);
//       return;
//     } else {
//       var userinfo = {
//         username : req.body.username,
//         email : req.body.email,
//         password : req.body.password,
//       };
//       var userdata = {
//         username : req.body.username,
//         accomplishment : req.body.accomplishment,
//       }
//       var instanceUserInfo = new UserInfoModel(userinfo);
//       instanceUserInfo.save();
//       var instanceUserData = new UserDataModel(userdata);
//       instanceUserData.save();
//       console.log('username: ' + req.body.username + ', email: ' + req.body.email + ', password: ' + req.body.password);
//       console.log('accomplishment: ' + req.body.accomplishment);
//     }
//   });

// });

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
