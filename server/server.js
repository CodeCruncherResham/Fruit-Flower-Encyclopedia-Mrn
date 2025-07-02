const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const fruitRoutes = require("./routes/fruitRoutes");
const flowerRoutes = require("./routes/flowerRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
require("dotenv").config();
const searchRoutes = require("./routes/searchRoute");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/fruits", fruitRoutes);
app.use("/api/flowers", flowerRoutes);
app.use("/api/reviews", reviewRoutes); // ✅ Added Review Route
app.use("/api/search", searchRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
