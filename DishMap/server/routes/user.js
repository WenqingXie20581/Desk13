const express = require("express");
const router = express.Router();
const verify = require("./verifyToken");
const UserDataModel = require("../db/UserDataSchema");

router.get("/accomplishment", verify, async (req, res) => {
    console.log("获取accomplishment");
  const userid = req.token.userid;

  var userdata = await UserDataModel.findOne({ userid: userid });
  if (!userdata) {
    return res.send("database error, empty userdata");
  }
  const userAccomplishment = {
    likedRecipeIds: userdata.likedRecipeIds,
    completedRecipeIds: userdata.completedRecipeIds,
    uploadedRecipeIds: userdata.uploadRecipeIds,
  };
  res.send(userAccomplishment);
});

module.exports = router;
