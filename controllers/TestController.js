const db = require(`../models/index.js`);

class TestController {
    
  // check whether is a user logined
    login(req, res) {
      var sess = req.session;
      var loginUser = sess.loginUser;
      if(loginUser != null)
      {
        var id = sess.userID;
        db.usersInfo.findByID(id,result=>{
          res.render("layout/index",{template: 'Test',isLogined: true,user_name:result.first_name +" "+ result.last_name });
        });
      }
      else
      {
        res.render("layout",{template: 'Test',isLogined: false,user_name:"anyone"});
      }

    }
}

module.exports = TestController;