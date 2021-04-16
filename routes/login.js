const express = require('express');
const router = express.Router();

const LoginController = require("../controllers/LoginController");
const controller = new LoginController();
//TODO: session
router.get("/", (req, res) => controller.start(req, res));
router.post("/", (req, res) => controller.login(req, res));


module.exports = router;