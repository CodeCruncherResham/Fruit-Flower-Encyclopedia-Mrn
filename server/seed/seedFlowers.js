const mongoose = require("mongoose");
const Flower = require("../models/Flower");

const flowers = [
  {
    name: "Rose",
    scientificName: "Rosa",
    description: "Rose is widely known for its fragrance.",
    culturalMeaning: "Love, passion, and respect",
    colorVariants: ["Red", "White", "Yellow"],
    uses: ["Gifting", "Cosmetics"],
    image: "/images/rose.jpg"
  },
  {
    name: "Lotus",
    scientificName: "Nelumbo nucifera",
    description: "Lotus is the national flower of India.",
    culturalMeaning: "Purity and divinity",
    colorVariants: ["Pink", "White"],
    uses: ["Religious rituals", "Decoration"],
    image: "/images/lotus.jpg"
  }
];

mongoose.connect("mongodb://localhost:27017/fruitFlowerDB", { useNewUrlParser: true, useUnifiedTopology: true });

Flower.deleteMany().then(() => {
  Flower.insertMany(flowers).then(() => {
    console.log("Flowers inserted");
    mongoose.disconnect();
  });
});