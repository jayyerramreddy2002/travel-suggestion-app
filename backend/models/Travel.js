const mongoose = require("mongoose");

/*
 This defines how travel data looks in MongoDB
*/
const TravelSchema = new mongoose.Schema({
  destination: {
    type: String,
    required: true
  },
  budget: {
    type: Number,
    required: true
  },
  days: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Travel", TravelSchema);