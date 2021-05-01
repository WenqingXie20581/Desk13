//todo userName和password唯一确定一个账号  可以考虑直接输入邮箱登录吧？
//查询结果不存在(mongoose判断查询结果为空)，或者输入id错误，应该抛出异常，在上层捕获后显示在前端
//待确认：不需要删除完成，取消喜欢吧？

require("../db.js");
const UserModel = require("./UserSchema.js");

//注册时插入User数据
var insert = function insert(data) {
  var instance = new UserModel(data);
  instance.save(function (err, doc) {
    if (err) {
      return console.log(err);
    } else {
      console.log(doc);
    }
  });
};

//根据id删除
var removeById = function removeById(_id) {
  UserModel.remove({ _id: _id }, function (err, doc) {
    if (err) {
      return console.log(err);
    } else {
      console.log(doc);
    }
  });
};

//根据id查询
var findById = function findById(_id) {
  UserModel.findOne({ _id: _id }, function (err, doc) {
    if (err) {
      return console.log(err);

      //判断结果是否为空
    } else if (!doc) {
      console.log("result is empty.");
    } else {
      console.log(JSON.stringify(doc, undefined, 2));
    }
  });
};

//根据id查询
var findByEmailAddress = function findByEmailAddress(emailAddress) {
  UserModel.findOne({ emailAddress: emailAddress }, function (err, doc) {
    if (err) {
      return console.log(err);
    } else if (!doc) {
      console.log("result is empty.");
    } else {
      console.log(JSON.stringify(doc, undefined, 2));
    }
  });
};

// // 给指定userid 增加喜欢的菜单的id;
var addAccomplishedRecipeIds = function addAccomplishedRecipeIds(
  _id,
  RecipeId
) {
  UserModel.findOne({ _id: _id }, function (err, doc) {
    if (err) {
      console.log(err);
    } else {
      doc.toObject({ getters: true });
      if (doc.accomplishedRecipeIds.indexOf(RecipeId) != -1) {
        console.log("Duplicate accomplished recipe operation");
      } else {
        doc.accomplishedRecipeIds.push(RecipeId);
        UserModel.updateOne(
          { _id: _id },
          { accomplishedRecipeIds: doc.accomplishedRecipeIds },
          function (err, doc) {
            if (err) {
              console.log(err);
            } else {
              console.log(doc);
            }
          }
        );
      }
    }
  });
};

// // 给指定userid 增加完成的菜单的id
var addLikedRecipeIds = function addLikedRecipeIds(_id, RecipeId) {
  UserModel.findOne({ _id: _id }, function (err, doc) {
    if (err) {
      console.log(err);
    } else {
      doc.toObject({ getters: true });
      if (doc.likedRecipeIds.indexOf(RecipeId) != -1) {
        console.log("Duplicate like recipe operation");
      } else {
        doc.likedRecipeIds.push(RecipeId);
        UserModel.updateOne(
          { _id: _id },
          { likedRecipeIds: doc.likedRecipeIds },
          function (err, doc) {
            if (err) {
              console.log(err);
            } else {
              console.log(doc);
            }
          }
        );
      }
    }
  });
};

// 给指定userid 增加上传菜单的id
var addUploadedRecipeIds = function addUploadedRecipeIds(_id, RecipeId) {
  UserModel.findOne({ _id: _id }, function (err, doc) {
    if (err) {
      console.log(err);
    } else {
      doc.toObject({ getters: true });
      if (doc.uploadedRecipeIds.indexOf(RecipeId) != -1) {
        console.log("Duplicate like recipe operation");
      } else {
        doc.uploadedRecipeIds.push(RecipeId);
        UserModel.updateOne(
          { _id: _id },
          { uploadedRecipeIds: doc.uploadedRecipeIds },
          function (err, doc) {
            if (err) {
              console.log(err);
            } else {
              console.log(doc);
            }
          }
        );
      }
    }
  });
};

module.exports = {
  insert,
  removeById,
  findById,
  findByEmailAddress,
  addLikedRecipeIds,
  addAccomplishedRecipeIds,
  addUploadedRecipeIds,
};
