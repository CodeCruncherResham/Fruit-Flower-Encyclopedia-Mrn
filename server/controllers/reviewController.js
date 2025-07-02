const Review = require("../models/Review");

exports.createReview = async (req, res) => {
  try {
    const review = await Review.create(req.body);
    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getReviews = async (req, res) => {
  try {
    const { itemName } = req.params;
    const reviews = await Review.find({
      itemName: { $regex: new RegExp(itemName, "i") }
    });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
