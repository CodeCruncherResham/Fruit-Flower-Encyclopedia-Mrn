const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  itemType: String, // 'fruit' or 'flower'
  itemName: String,
  rating: Number,
  comment: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Review", reviewSchema);
