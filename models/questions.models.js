const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  category: {
    type: String,
    enum: ["General Knowledge", "Sports", "Geography"],
  },
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
  },
  question: { type: String, required: true },
  correct_answer: { type: String, required: true },
  incorrect_answers: { type: Array, required: true },
});

const questionModel = new mongoose.model("question", questionSchema);

module.exports = questionModel;
