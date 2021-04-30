
module.exports = {
  insert(collectionName, insertData) {
    return new Promise((resolve, reject) => {
      collectionName.insertMany(insertData, (err) => {
        if (err) {
          throw err;
        }
        resolve();
      })
    })
  }



}
