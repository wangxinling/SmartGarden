const ObjectId = require('mongodb').ObjectId;
class usersInfo {
  constructor(dbo)
  {
    this.collection = dbo.collection("usersInfo");
  }
  insert(data,callback)
  {
    this.collection.insertOne(data, (err, result)=> {
        if (err) throw err;
        callback(result);
     });
  }
  find(data,callback)
  {
    this.collection.findOne({ email: data.email, password: data.password},(err, result)=> {
      if (err) throw err;
      callback(result);
    });
  }
  findByID(id,callback)
  {
    this.collection.findOne({_id:ObjectId(id)},(err, result)=> {
      if (err) throw err;
      callback(result);
    });
  }

}
module.exports = usersInfo;
