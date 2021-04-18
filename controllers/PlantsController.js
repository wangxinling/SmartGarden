const db = require(`../models/index.js`);

class PlantsController {
    // render page
    start(req, res) {
      var sess = req.session;
      var loginUser = sess.loginUser;
      var isLogined = !!loginUser;
      if(isLogined)
      {
        db.userPlants.getAll(sess.userID,result=>{
            res.render("layout/index",{template: 'plants',isLogined: true, myPlantsList:result });
        });
      }
      else
      {
        res.render("layout/index",{template: 'plants',isLogined: false, myPlantsList:null });
      }
    }

    add(req,res){
      var sess = req.session;
      var data =req.body;
      data.userID = sess.userID;
      db.userPlants.insert(data,(result)=>{
        res.end('success');
      });
    }
}

module.exports = PlantsController;