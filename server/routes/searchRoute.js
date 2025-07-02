const express = require("express");
const router = express.Router();
const Flower = require("../models/Flower");
const Fruit = require("../models/Fruit");
const getItemByType = require("../utils/getItemByType");

router.get("/:name", async (req, res) => {
  const { name } = req.params;

  // First, try to find flower in DB
  let flower = await Flower.findOne({ name: new RegExp(name, "i") });
  if (flower) return res.json({ type: "flower" });

  // If not in DB, try external fetch
  const flowerData = await getItemByType("flower", name);
  if (flowerData) {
    await Flower.create(flowerData);
    return res.json({ type: "flower" });
  }

  // Now try fruit in DB
  let fruit = await Fruit.findOne({ name: new RegExp(name, "i") });
  if (fruit) return res.json({ type: "fruit" });

  // If not in DB, try external fetch
  const fruitData = await getItemByType("fruit", name);
  if (fruitData) {
    await Fruit.create(fruitData);
    return res.json({ type: "fruit" });
  }

  // Nothing found at all
  res.status(404).json({ type: "unknown" });
});

module.exports = router;
