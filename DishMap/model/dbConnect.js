const { Db } = require("mongodb");
const mongoose = require("mongoose");


const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  connectTimeoutMS: 10000,
};

const url = `mongodb://localhost:27017/DishMap`;

mongoose
  .connect(url, options)
  .then(function () {
    console.log("MongoDB is connected");
  })
  .catch(function (err) {
    console.log(err);
  });

  mongoose.connection.on('connected', ()=>{
    console.log('MongoDB connect success!');
  })

  mongoose.connection.on('disconnected', ()=>{
    console.log('MongoDB disconnect success!');
  })

  mongoose.connection.on('error', ()=>{
    console.log('MongoDB connect throw an exception!');
  })

  module.exports=mongoose;
