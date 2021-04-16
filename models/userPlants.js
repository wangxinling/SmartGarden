class userPlants {
    constructor(dbo)
    {
      this.collection = dbo.collection("usersInfo");
    }
    insert(data,callback)
    {
      this.collection.insertOne(data, function(err, result) {
          callback(data);
       });
    }
    getAll(data,callback)
    {
      this.collection.find({ email: data.email, password: data.password},(err, result)=> {
        if (err) throw err;
        callback(result);
      });
    }
  
  }
  module.exports = userPlants;