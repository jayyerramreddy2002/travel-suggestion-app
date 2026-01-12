const express = require("express");
const router = express.Router();
const Travel = require("../models/Travel");

/*
 API to ADD travel suggestion
*/
router.post("/add", async (req, res) => {
  try {
    console.log("Request Body:", req.body); // 👈 ADD THIS

    const travel = new Travel(req.body);
    await travel.save();

    console.log("Saved to MongoDB"); // 👈 ADD THIS

    res.status(201).json({ message: "Travel data saved successfully" });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: error.message });
  }
});

/*
 API to GET all travel suggestions
*/
router.get("/all", async (req, res) => {
  try {
    const travels = await Travel.find();
    res.status(200).json(travels);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;