const express = require('express');
const router = express.Router();

const LoginController = require("../controllers/LoginController");
const controller = new LoginController();

router.get("/", (req, res) => controller.start(req, res));
router.post("/add", (req, res) => controller.add(req, res));
router.post("/delete", (req, res) => controller.delete(req, res));
router.post("/done", (req, res) => controller.done(req, res));
router.post("/later", (req, res) => controller.later(req, res));

module.exports = router;