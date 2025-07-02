const mongoose = require("mongoose");

const flowerSchema = new mongoose.Schema({
  name: String,
  scientificName: String,
  description: String,
  culturalMeaning: String,
  colorVariants: [String],
  uses: [String],
  season: String,
  image: String,
});

module.exports = mongoose.model("Flower", flowerSchema);
