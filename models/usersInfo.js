class usersInfo {
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
  find(data,callback)
  {
    this.collection.findOne({ email: data.email, password: data.password},(err, result)=> {
      if (err) throw err;
      if(result==null)
      {

      }
      callback(result);
    });
  }

}
module.exports = usersInfo;
