const db = require(`../models/index.js`);

class LoginController {
    
    start(req, res) {
      res.render("layout/index",{template: 'login',errorMessage:null});
    }
    login(req,res){
      let data =req.body;
      db.usersInfo.find(data,result=>{
        if(result == null)
        {
          res.render("layout/index",{template: 'login', errorMessage:"The email or password is worry! Try again."});
        }
        else
        {
          res.render("layout/index",{template: 'Test',user_name:result.first_name +" "+ result.last_name });
        }
      });
    }
}

module.exports = LoginController;