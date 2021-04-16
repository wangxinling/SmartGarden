const db = require(`../models/index.js`);

class RegisterController {
    
    start(req, res) {
      res.render("layout/index",{template: 'register',isLogined: false});
    }
    store(req,res){
      let data =req.body;
      db.usersInfo.insert(data,result=>{
        req.session.regenerate(function(err) {
          let name = result.first_name +" "+ result.last_name;
          req.session.loginUser = name;
          req.session.id = result._id;
          res.render("layout/index",{template: 'Test',isLogined: true,user_name: name});					
        });
      });
    }
}

module.exports = RegisterController;