const { Db } = require('mongodb');
const mongoose = require('mongoose');

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
const url = `mongodb://localhost:27017/DishMap`

mongoose.connect(url, options).then(function () {
  console.log('MongoDB is connected');
})
  .catch(function (err) {
    console.log(err);
  });

const IngredientSchema = new mongoose.Schema({
  name: String,
  quantity: String,
  treatment: String,
});

const RecipeSchema = mongoose.Schema({
    id: Number,
    title: String,
    nationality: String,
    introduction: String,
    ingredients : [IngredientSchema],
    directions : [String],
    imgUrl: String,
    popularity: Number,
});

var r = mongoose.model('Recipe', RecipeSchema);

r.find({}, function(err, doc){
    if(err){
        console.log(err);
        return;
    }
    // console.log(doc);
    console.log(JSON.stringify(doc, undefined, 2));

    console.log("find something");
})


//手动插入数据
 //db.recipes.insert({id: 1, title: 'burger', nationality: 'Germany', introduction: 'It is named after the sound of "Gudong" when food is put into boiling water. It is one of the original Chinese delicacies, and it is also a kind of food suitable for all ages',ingredients: [{name: 'beef', quantity: '1 kg', treatment: 'null'}], directions: ['fry' ,'done'], imgUrl: null , popularity: 11})
