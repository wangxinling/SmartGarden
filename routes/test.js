const express = require('express');
const router = express.Router();

const TestController = require("../controllers/TestController");
const controller = new TestController();

router.get("/", (req, res) => controller.login(req, res)); // testing login state

module.exports = router;