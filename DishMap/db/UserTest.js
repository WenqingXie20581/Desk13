const user = require("./UserOperations.js");
// 新增
// user.insert({
//   emailAddress: "mkx@163.com",
//   username: "mkx",
//   password: "123",
//   likedRecipeIds: [],
//   accomplishedRecipeIds: [],
//   uploadedRecipeIds: [],
// });

// 删除
// user.removeById("608d56093b966c45c87440e7");
// 查找
// user.findById("608d56093b966c45c87440e7");

// //增加喜欢
// user.addLikedRecipeIds("608d5c5e4879682680fa4914", "608d588dab2b643c64689fee");

// //增加完成
// user.addAccomplishedRecipeIds(
//   "608d5c5e4879682680fa4914",
//   "608d588dab2b643c64689fee"
// );

// //增加上传
// user.addUploadedRecipeIds(
//   "608d5c5e4879682680fa4914",
//   "608d588dab2b643c64689fee"
// );

user.findByEmailAddress("mkx@163");
