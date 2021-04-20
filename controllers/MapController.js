const db = require(`../models/index.js`);

class MapController {
    // render page
    start(req, res) {
      var sess = req.session;
      var loginUser = sess.loginUser;
      var isLogined = !!loginUser;
      if(isLogined)
      {
        res.render("layout/index",{template: 'plants',isLogined });
      }
    }
    saveLocation(req, res) {
        var sess = req.session;
        var loginUser = sess.loginUser;
        var isLogined = !!loginUser;
        if(isLogined)
        {
          res.render("layout/index",{template: 'plants',isLogined });
        }
    }
}
module.exports = MapController;