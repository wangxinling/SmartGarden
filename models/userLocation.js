const ObjectId = require('mongodb').ObjectId;
class userLocation {
    constructor(dbo)
    {
      this.collection = dbo.collection("userLocation");
    }
    insert(data,callback)
    {
      this.collection.insertOne(data, (err, result)=> {
          if (err) throw err;
          callback(result);
       });
    }
    delete(userID,callback)
    {
      this.collection.deleteOne({_id:ObjectId(userID)},(err, result)=> {
        if (err) throw err;
        callback(result); 
      });
    }
    update(data,callback)
    {  
      var myquery = { userID:data.userID};

      var newvalues = { $set: {latitude: data.latitude, longitude: data.longitude } };
      
      this.collection.updateOne(myquery, newvalues, function(err, result) {
        if (err) throw err;
        callback(result);
      });
    }
    findByID(userID,callback)
    {
      this.collection.findOne({userID:userID},(err, result)=> {
        if (err) throw err;
        callback(result);
      });
    }
}
module.exports = userLocation;