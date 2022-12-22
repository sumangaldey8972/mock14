const express = require("express");
const app = express.Router();
const questionModel = require("../models/questions.models");

app.get("/", async (req, res) => {
  const { category, difficulty, limit } = req.query;

  try {
    if(category && difficulty && limit){
        let questions = await questionModel
          .find({
            category: category,
            difficulty: difficulty,
          })
          .limit(limit);
        res
          .status(200)
          .send({ message: "data fetch successfull", data: questions });
    } else {
        let allQuestion = await questionModel.find();
        res
          .status(200)
          .send({ message: "data fetch successfull", data: allQuestion });
    }
  } catch (e) {
    res.status(401).json({ message: "error", response: e.message });
  }
});

module.exports = app;
