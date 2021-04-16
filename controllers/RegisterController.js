const db = require(`../models/index.js`);

class RegisterController {
    
    start(req, res) {
      res.render("layout/index",{template: 'register'});
    }
    store(req,res){
      let data =req.body;
      db.usersInfo.insert(data,result=>{
        res.render("layout/index",{template: 'Test',user_name:result.first_name +" "+ result.last_name });
      });
    }
}

module.exports = RegisterController;