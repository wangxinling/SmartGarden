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
      var date = new Date();
      data.lastTime = date.toDateString();
      date.setDate(date.getDate() + 3);
      data.nextTime = date.toDateString();
      db.userPlants.insert(data,(result)=>{
        res.end('success');
      });
    }

    delete(req,res){
      var sess = req.session;
      var isLogined = !!sess.loginUser;
      if(isLogined)
      { 
        var data =req.body;
        db.userPlants.delete(data.plantID,(result)=>{
          res.end('success');
        });
      }
    }
    done(req,res){
      var sess = req.session;
      var isLogined = !!sess.loginUser;
      if(isLogined)
      {
        var date = new Date();
        // add a day
        var plantID =req.body.plantID;
        var update = {};
        update.plantID = plantID;
        update.lastTime = date.toDateString();
        date.setDate(date.getDate() + 3);
        update.nextTime = date.toDateString();
        db.userPlants.update(update,(result)=>{
          res.end('success');
        });
        
      }
    }
    later(req,res){
      var sess = req.session;
      var isLogined = !!sess.loginUser;
      if(isLogined)
      {
        var date = new Date();
        // add a day
        var plantID =req.body.plantID;
        var update = {};
        update.plantID = plantID;
        date.setDate(date.getDate() + 1);
        update.nextTime = date.toDateString();
        db.userPlants.update(update,(result)=>{
          res.end('success');
        });
        
      }
    }
    

    notifyAll()
    {
      //TODO: loop all userPlants and check the next water time and send email or other reminder method to user.

    }
}

module.exports = PlantsController;