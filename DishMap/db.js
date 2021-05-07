const mongoose = require("mongoose");

// const {
//   MONGO_USERNAME,
//   MONGO_PASSWORD,
//   MONGO_HOSTNAME,
//   MONGO_PORT,
//   MONGO_DB
// } = process.env;

const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  connectTimeoutMS: 10000,
};

//  const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
const url = `mongodb://localhost:27017/DishMap`;

mongoose
  .connect(url, options)
  .then(function () {
    console.log("MongoDB is connected");
  })
  .catch(function (err) {
    console.log(err);
  });

mongoose.connection.on("connected", () => {
  console.log("MongoDB connect success!");
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnect success!");
});

mongoose.connection.on("error", () => {
  console.log("MongoDB connect throw an exception!");
});

// // 1. Query
// r.find({}, function (err, doc) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   // console.log(doc);
//   console.log(JSON.stringify(doc, undefined, 2));

//   console.log("find something");
// });

// //手动插入数据
// //db.recipes.insert({id: 1, title: 'burger', nationality: 'Germany', introduction: 'It is named after the sound of "Gudong" when food is put into boiling water. It is one of the original Chinese delicacies, and it is also a kind of food suitable for all ages',ingredients: [{name: 'beef', quantity: '1 kg', treatment: 'null'}], directions: ['fry' ,'done'], imgUrl: null , popularity: 11})

// // var rInsert = new r({
// //   id: 2,
// //   title: "paris",
// //   nationality: "France",
// //   introduction: "Capital of France",
// //   ingredients: [
// //     {
// //       name: "beef",
// //       quantity: "0.5kg",
// //       treatment: null,
// //     },
// //   ],
// //   directions: ["fry", "done"],
// //   imgUrl: null,
// //   popularity: 13,
// // });

// // rInsert.save((err) => {
// //   if (err) {
// //     throw err;
// //   }
// //   console.log("Insert successfully");
// // });

// // r.updateOne({"_id":"608bd921a1dc702a3c557057"}, {"id":1}, (err, doc)=>{
// //   if (err) {
// //     throw err;
// //   }
// //   console.log('Update one successfully');
// // })

// r.deleteOne({ id: 2 }, (err, doc) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Delete success");
// });
