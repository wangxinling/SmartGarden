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

}
module.exports = usersInfo;
