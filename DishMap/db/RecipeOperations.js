require("../db.js");
const RecipeModel = require("./RecipeSchema.js");

//插入Recipe数据
var insert = function insert(data) {
  var instance = new RecipeModel(data);
  instance.save(function (err, doc) {
    if (err) {
      return console.log(err);
    } else {
      console.log(doc);
    }
  });
};

//根据id删除
var removeById = function removeById(id) {
  RecipeModel.remove({ id: id }, function (err, doc) {
    if (err) {
      return console.log(err);
    } else {
      console.log(doc);
    }
  });
};

//根据id查询
var findById = function findById(id) {
  RecipeModel.findOne({ id: id }, function (err, doc) {
    if (err) {
      return console.log(err);
    } else {
      console.log(JSON.stringify(doc, undefined, 2));
    }
  });
};

//根据title查询
var findByTitle = function findByTitle(title) {
  //find返回的是数组，findOne返回的是单条数据
  RecipeModel.find({ title: title }, function (err, doc) {
    if (err) {
      return console.log(err);
    } else {
      console.log(JSON.stringify(doc, undefined, 2));
    }
  });
};

// 根据Id查询popularity;
var findPopularity = function findPopularity(id) {
  RecipeModel.findOne({ id: id }, function (err, doc) {
    if (err) {
      return console.log(err);
    } else {
      //没有这一句会出现undefined。得把doc结果转换位JavaScript对象、
      //Converts this document into a plain javascript object, ready for storage in MongoDB.
      doc.toObject({ getters: true });
      console.log(typeof doc.popularity);
      console.log(doc.popularity);
      return doc.popularity;
    }
  });
};

//根据id增加popularity; 因为node的回调函数是异步的，不能直接调用findPopularity函数
//需要在find的回调函数中执行增加逻辑。
//同样的，如果调用这个函数，也调用findPopularity函数，没办法哪个先返回。
var increasePopularity = function increasePopularity(id) {
  RecipeModel.findOne({ id: id }, function (err, doc) {
    if (err) {
      console.log(err);
    } else {
      doc.toObject({ getters: true });
      doc.popularity = doc.popularity + 1;
      RecipeModel.updateOne(
        { id: id },
        { popularity: doc.popularity },
        function (err, doc) {
          if (err) {
            console.log(err);
          } else {
            console.log(doc);
          }
        }
      );
    }
  });
};

module.exports = {
  insert,
  removeById,
  findById,
  findByTitle,
  findPopularity,
  increasePopularity,
};
