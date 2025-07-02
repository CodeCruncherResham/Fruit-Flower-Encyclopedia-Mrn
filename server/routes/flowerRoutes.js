const express = require("express");
const router = express.Router();
const { getAllFlowers, getFlowerByName } = require("../controllers/flowerController");

router.get("/", getAllFlowers);
router.get("/:name", getFlowerByName);

module.exports = router;
