class TestController {
    
    login(req, res) {
      let user_name = "Mike Wang";
      res.render("layout",{template: 'Test',user_name});
    }
}

module.exports = TestController;