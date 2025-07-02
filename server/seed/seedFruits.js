const mongoose = require("mongoose");
const Fruit = require("../models/Fruit");

const fruits = [
  {
    name: "Mango",
    scientificName: "Mangifera indica",
    description: "Mango is known as the king of fruits.",
    nutrition: ["Vitamin C", "Fiber", "Antioxidants"],
    medicinalUses: ["Improves digestion", "Boosts immunity"],
    variants: ["Alphonso", "Kesar", "Dasheri"],
    image: "/images/mango.jpg"
  },
  {
    name: "Banana",
    scientificName: "Musa",
    description: "Banana is a staple fruit rich in energy.",
    nutrition: ["Potassium", "Vitamin B6"],
    medicinalUses: ["Aids digestion", "Boosts heart health"],
    variants: ["Robusta", "Rasthali"],
    image: "/images/banana.jpg"
  }
];

mongoose.connect("mongodb://localhost:27017/fruitFlowerDB", { useNewUrlParser: true, useUnifiedTopology: true });

Fruit.deleteMany().then(() => {
  Fruit.insertMany(fruits).then(() => {
    console.log("Fruits inserted");
    mongoose.disconnect();
  });
});