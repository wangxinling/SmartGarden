class userPlants {
    constructor(dbo)
    {
      this.collection = dbo.collection("userPlants");
    }
    insert(data,callback)
    {
      this.collection.insertOne(data, (err, result)=> {
          if (err) throw err;
          callback(result);
       });
    }
    async getAll(userID,callback)
    {
      let plantsList = await this.collection.find({ userID: userID}).toArray();

      callback(plantsList);

    }
  
  }
  module.exports = userPlants;