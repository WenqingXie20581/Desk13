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
var removeById = function removeById(_id) {
  // mongoose用 JSON 文档的格式指定查询条件
  RecipeModel.remove({ _id: _id }, function (err, doc) {
    if (err) {
      return console.log(err);
    } else {
      console.log(doc);
    }
  });
};

//根据id查询  在其他文件里调用这个方法，没等返回外面就已经执行完了。
// var findById = function findById(_id) {
//   RecipeModel.findOne({ _id: _id }, function (err, doc) {
//     if (err) {
//       return console.log(err);
//     } else {
//       return JSON.stringify(doc, undefined, 2);
//       // console.log(JSON.stringify(doc, undefined, 2));
//     }
//   });
// };

var findById = function findById(id, callback) {
  RecipeModel.findOne({ id: id }, callback);
};

var getIdNum = function getIdNum() {
  // Exec() 方法，可能是由于异步的原因，返回的值都是 undefined
  RecipeModel.find({})
    .sort({ _id: -1 })
    .limit(1)
    .exec(async function (err, doc) {
      if (err) {
        return console.log(err);
      } else {
        // doc.toObject({ getters: true });
        console.log("typdof doc.id: " + typeof doc.id);
        console.log("doc: " + doc);
        console.log("doc.id: " + doc.id);
        return await doc.id;
      }
    });

  // Promise 方法
  // return new Promise((resolve, reject) => {
  //   RecipeModel.findOne({}, {}, {sort:{'_id':-1}}, function(err, obj) {
  //     resolve(obj)
  //   });
  // })

  // return RecipeModel.findOne().sort({_id:-1}).limit(1);

  // 直接读取数据库中记录条数
  // RecipeModel.find({}).count( function(err, number) {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   console.log('db count ' + number);
  //   return number;
  // });
};

var findById = function findById(id, done) {
  RecipeModel.findOne({ id: id }, done);
};

var findByTitle = function findByTitle(title, done) {
  RecipeModel.find({ title: title }, done);
};

// //根据title查询
// var findByTitle = function findByTitle(title) {
//   //find返回的是数组，findOne返回的是单条数据
//   RecipeModel.find({ title: title }, function (err, doc) {
//     if (err) {
//       return console.log(err);
//     } else {
//       console.log(JSON.stringify(doc, undefined, 2));
//     }
//   });
// };

// 根据Id查询popularity;
var findPopularity = function findPopularity(_id) {
  RecipeModel.findOne({ _id: _id }, function (err, doc) {
    if (err) {
      return console.log(err);
    } else {
      //没有这一句会出现undefined。得把doc结果转换位JavaScript对象、
      //Converts this document into a plain javascript object, ready for storage in MongoDB.
      doc.toObject({ getters: true });
      // console.log(typeof doc.popularity);
      // console.log(doc.popularity);
      return doc.popularity;
    }
  });
};

//根据id增加popularity; 因为node的回调函数是异步的，不能直接调用findPopularity函数
//需要在find的回调函数中执行增加逻辑。
//同样的，如果调用这个函数，也调用findPopularity函数，是不能确定哪个函数先返回的。
var increasePopularity = function increasePopularity(id) {
  RecipeModel.findOne({ _id: _id }, function (err, doc) {
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
  getIdNum,
  findById,
  findByTitle,
  findPopularity,
  increasePopularity,
};
