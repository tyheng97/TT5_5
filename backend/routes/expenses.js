const router = require("express").Router();
const User = require("../models/User");
const Expense = require("../models/Expense");

//CREATE
router.post("/", async (req, res) => {
  const newexpense = new Expense(req.body);
  try {
    const savedexpense = await newexpense.save();
    res.status(200).json(savedexpense);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const expense = await expense.findById(req.params.id);
    try {
      const updatedexpense = await expense.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedexpense);
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE expense
router.delete("/:id", async (req, res) => {
  try {
    const expense = await expense.findById(req.params.id);
    if (expense.username === req.body.username) {
      try {
        await expense.delete();
        res.status(200).json("expense has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your expense!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET expense
router.get("/:id", async (req, res) => {
  try {
    const expense = await expense.findById(req.params.id);
    res.status(200).json(expense);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL Expense
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let expenses;
    if (username) {
      expenses = await expense.find({ username });
    } else if (catName) {
      expenses = await expense.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      expenses = await expense.find();
    }
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
