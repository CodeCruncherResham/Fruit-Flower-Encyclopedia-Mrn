// 📁 server/controllers/flowerController.js
const Flower = require("../models/Flower");
const getItemByType = require("../utils/getItemByType");

// Get all flowers
exports.getAllFlowers = async (req, res) => {
  try {
    const flowers = await Flower.find();
    res.json(flowers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get flower by name (search in DB → else fetch externally)
exports.getFlowerByName = async (req, res) => {
  try {
    const name = req.params.name;

    let flower = await Flower.findOne({
      name: { $regex: new RegExp(name, "i") },
    });

    if (flower) return res.json(flower); // Found in DB

    // Not in DB → Use centralized fetch logic
    const fetched = await getItemByType("flower", name);

    if (!fetched) return res.status(404).json({ message: "Flower not found" });

    const saved = await Flower.create(fetched); // Save for caching
    return res.json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
