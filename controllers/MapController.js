const db = require(`../models/index.js`);

class MapController {
    // render page
    start(req, res) {
      var sess = req.session;
      var loginUser = sess.loginUser;
      var isLogined = !!loginUser;

      res.render("layout/index",{template: 'map',isLogined });
      
    }
    saveLocation(req, res) {
        var sess = req.session;
        var loginUser = sess.loginUser;
        var isLogined = !!loginUser;
       
        if(isLogined)
        {
            var data =req.body;
            data.userID = sess.userID;
            db.userLocation.findByID(sess.userID,(result)=>{
                if(result == null)
                {
                    db.userLocation.insert(data,(result)=>{
                        res.end('success');
                      });
                }
                else
                {
                    db.userLocation.update(data,(result)=>{
                        res.end('success');
                      });
                }
              });
            
        }
        else
        {
            res.end('needLogin');
        }
    }
}
module.exports = MapController;