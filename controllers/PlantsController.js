const db = require(`../models/index.js`);
var nodemailer = require('nodemailer');

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
      data.needNotify = true;
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
        update.needNotify = true;
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
        // add a day later
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
      // loop all userPlants and check the next water time and send email or other reminder method to user.
     
      var transporter = nodemailer.createTransport({
        service: 'deakin',
        auth: {
          user: 'wangxinli@deakin.edu.au',
          pass: 'Liqianying17'
        }
      });
      var nowDate = new Date();
      db.userPlants.listAllData(result=>{
        result.forEach(plant => {
          var nextWaterTime = new Date(plant.nextTime);
          // if(nextWaterTime > nowDate ) // Debug testing
          if(nextWaterTime < nowDate )
          {
            //update DB information and set next water time
            var nextDate = new Date();
            plant.lastTime = plant.nextTime;
            nextDate.setDate(nowDate.getDate() + 3);
            plant.nextTime = nextDate.toDateString();
            plant.needNotify = true;
            db.userPlants.update(plant,(result)=>{
              //do nothing
            });

            //TODO: the email send fail. Here need a SMTP server.
            //Send an email to user
            db.usersInfo.findByID(plant.userID,userData=>{

              var mailOptions = {
                from: 'wangxinli@deakin.edu.au',
                to: userData.email,
                subject: 'Your plant need to be water',
                text: 'It is time to water '+plant.name
              };
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
            });
            
          };

        });
        
      });
     
    }
}

module.exports = PlantsController;