const express = require('express');
const router = express.Router();

const MapController = require("../controllers/MapController");
const controller = new MapController();

router.get("/", (req, res) => controller.start(req, res));        //show the page
router.post("/save", (req, res) => controller.saveLocation(req, res));     

module.exports = router;