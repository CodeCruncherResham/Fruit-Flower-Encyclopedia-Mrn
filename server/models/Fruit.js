const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
  name: String,
  scientificName: String,
  description: String,
  nutrition: [String],
  medicinalUses: [String],
  variants: [String],
  image: String,
  season: String,
  region: String,
});

module.exports = mongoose.model("Fruit", fruitSchema);
