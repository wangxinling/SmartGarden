const db = require(`../models/index.js`);

class LoginController {
    
    start(req, res) {
      res.render("layout/index",{template: 'login',isLogined: false, errorMessage:null});
    }
    login(req,res){
      let data =req.body;
      db.usersInfo.find(data,result=>{
        if(result == null)
        {
          res.render("layout/index",{template: 'login',isLogined: false, errorMessage:"The email or password is worry! Try again."});
        }
        else
        {
            req.session.regenerate(function(err) {
              let name = result.first_name +" "+ result.last_name;
              req.session.loginUser = name;
              req.session.userID = result._id;
              res.render("layout/index",{template: 'Test',isLogined: true,user_name: name});					
            });
        }
      });
    }
}

module.exports = LoginController;