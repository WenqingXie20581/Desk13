const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");
const UserInfoModel = require("../db/UserInfoSchema");
const UserDataModel = require("../db/UserDataSchema");
//参数校验
const { registerValidation, loginValidation } = require("./validation");
//密码加密
const bcrypt = require("bcryptjs");

router.use(express.json());

// register
router.post("/auth/signup", async (req, res) => {
  //Validate req.body
  const { error } = registerValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  //检查email是否重复/user是否已经注册过
  const emailExists = await UserInfoModel.findOne({ email: req.body.email });
  if (emailExists) {
    return res.status(400).send("Email already exists");
  }

  //对密码做hash
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //新建user
  const userInfo = new UserInfoModel({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });

  //Save to db  待优化这里可以自定义错误码返回
  try {
    const savedUserInfo = await userInfo.save();
    const userData = new UserDataModel({
      userid: savedUserInfo._id,
    });
    await userData.save();
    res.send({ userid: savedUserInfo._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/auth/signin", async (req, res) => {
  //Validate req.body
  const { error } = loginValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  //检查user是否注册过
  const user = await UserInfoModel.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send("Email is wrong or not sign up");
  }

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  //   bcrypt.compareSync;
  if (!validPassword) {
    return res.status(400).send("Password is wrong");
  }
  // let cert = key.encrypt('test', '');
  let token = jwt.sign(
    {
      userid: user._id,
    },
    fs.readFileSync(path.join(__dirname, "../privatekey.pem")),
    { algorithm: "RS256", expiresIn: 60 * 60 }
  );
  const profile = {
    username: user.username,
    email: user.email,
  };
  res.header("auth-token", token).send({ token: token, profile: profile });
});

module.exports = router;
