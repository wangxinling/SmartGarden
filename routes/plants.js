const express = require('express');
const router = express.Router();

const PlantsController = require("../controllers/PlantsController");
const controller = new PlantsController();

router.get("/", (req, res) => controller.start(req, res));        //show the page
router.post("/add", (req, res) => controller.add(req, res));      //add a new plant
router.post("/delete", (req, res) => controller.delete(req, res));//delete a plant
router.post("/done", (req, res) => controller.done(req, res));    //mark a water time in to list
router.post("/later", (req, res) => controller.later(req, res));  //refresh reminder of water time (low priority)

module.exports = router;