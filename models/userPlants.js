const ObjectId = require('mongodb').ObjectId;
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
    delete(plantID,callback)
    {
      this.collection.deleteOne({_id:ObjectId(plantID)},(err, result)=> {
        if (err) throw err;
        callback(result); 
      });
    }
    update(data,callback)
    {  
      var myquery = { _id:ObjectId(data.plantID)};
      if(data.lastTime == null)
      {
        var newvalues = { $set: {nextTime: data.nextTime } };
      }
      else
      {
        var newvalues = { $set: {lastTime: data.lastTime, nextTime: data.nextTime } };
      }
      
      this.collection.updateOne(myquery, newvalues, function(err, result) {
        if (err) throw err;
        callback(result);
      });
    }
    async getAll(userID,callback)
    {
      //async function is similar to callback function
      let plantsList = await this.collection.find({ userID: userID}).toArray();

      callback(plantsList);

    }
    findByID(id,callback)
    {
      this.collection.findOne({_id:ObjectId(id)},(err, result)=> {
        if (err) throw err;
        callback(result);
      });
    }
  
  }
  module.exports = userPlants;