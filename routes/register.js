const express = require('express');
const router = express.Router();

const RegisterController = require("../controllers/RegisterController");
const controller = new RegisterController();

router.get("/", (req, res) => controller.start(req, res));
router.post("/", (req, res) => controller.store(req, res));


module.exports = router;