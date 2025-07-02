const express = require("express");
const router = express.Router();
const { getAllFruits, getFruitByName } = require("../controllers/fruitController");

router.get("/", getAllFruits);
router.get("/:name", getFruitByName);

module.exports = router;
