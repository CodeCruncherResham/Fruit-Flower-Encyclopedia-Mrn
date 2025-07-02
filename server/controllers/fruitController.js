const Fruit = require("../models/Fruit");
const getItemByType = require("../utils/getItemByType");

// Get all fruits
exports.getAllFruits = async (req, res) => {
  try {
    const fruits = await Fruit.find();
    res.json(fruits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get fruit by name (search in DB → else fetch externally)
exports.getFruitByName = async (req, res) => {
  try {
    const name = req.params.name;

    let fruit = await Fruit.findOne({
      name: { $regex: new RegExp(name, "i") },
    });

    if (fruit) return res.json(fruit); // Found in DB

    // Not in DB → Use centralized fetch logic
    const fetched = await getItemByType("fruit", name);

    if (!fetched) return res.status(404).json({ message: "Fruit not found" });

    const saved = await Fruit.create(fetched); // Save for caching
    return res.json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
