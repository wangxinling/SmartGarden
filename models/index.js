

const usersInfo = require("./usersInfo")
const db={};
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://sit725:171221@cluster0.evy6f.mongodb.net/SIT725?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const dbo = client.db("SIT725");
  db.usersInfo = new usersInfo(dbo);
});
module.exports = db;
