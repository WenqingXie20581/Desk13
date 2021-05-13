const mongoose = require("mongoose");

var FeedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  questions: {
    type: [String],
    required: true,
  },
  advice: {
    type: String,
    required: true,
    min: 6,
    max: 1024, //弄长一点
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Feedback", FeedbackSchema, "feedback");
