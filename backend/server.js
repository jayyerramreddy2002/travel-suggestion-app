
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Import Routes
const travelRoutes = require("./routes/travelRoutes");

// Use Routes
app.use("/api/travel", travelRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

const PORT = process.env.PORT ||5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});