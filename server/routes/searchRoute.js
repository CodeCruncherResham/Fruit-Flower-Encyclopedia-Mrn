const express = require("express");
const router = express.Router();
const Flower = require("../models/Flower");
const Fruit = require("../models/Fruit");
const getItemByType = require("../utils/getItemByType");

router.get("/:name", async (req, res) => {
  const { name } = req.params;

  let flower = await Flower.findOne({ name: new RegExp(`^${name}$`, "i") });
  let fruit = await Fruit.findOne({ name: new RegExp(`^${name}$`, "i") });

  if (flower && fruit) {
    // If found in both, prefer flower or ask user manually
    return res.json({ type: "flower", name: flower.name });
  }

  if (flower) {
    return res.json({ type: "flower", name: flower.name });
  }

  if (fruit) {
    return res.json({ type: "fruit", name: fruit.name });
  }

  // Not found in DB, fetch both externally in parallel
  const [flowerData, fruitData] = await Promise.all([
    getItemByType("flower", name),
    getItemByType("fruit", name)
  ]);

  if (flowerData && fruitData) {
    // If both found, prefer flower or ask user manually (here preferring flower)
    await Flower.create(flowerData);
    await Fruit.create(fruitData);
    return res.json({ type: "flower", name: flowerData.name });
  }

  if (flowerData) {
    await Flower.create(flowerData);
    return res.json({ type: "flower", name: flowerData.name });
  }

  if (fruitData) {
    await Fruit.create(fruitData);
    return res.json({ type: "fruit", name: fruitData.name });
  }

  res.status(404).json({ type: "unknown" });
});

module.exports = router;
