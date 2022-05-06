const router = require("express").Router();
const User = require("../models/User");
const Category = require("../models/Category");

//CREATE CAT
router.post("/", async (req, res) => {
    const newcategory = new Category(req.body);
    try {
        const savedcategory = await newcategory.save();
        res.status(200).json(savedcategory)
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET CAT
router.get("/:id", async (req, res) => {
  try {
    const category = await category.findById(req.params.id);
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err)
  }
});

//UPDATE CAT
router.put("/:id", async (req, res) => {
    try {
      const category = await category.findById(req.params.id);
      try {
        const updatedcategory = await category.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedcategory);
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

//DELTE CAT
router.delete("/:id", async (req, res) => {
    try {
      const category = await category.findById(req.params.id);
      if (category.username === req.body.username) {
        try {
          await category.delete();
          res.status(200).json("Category deleted.");
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("You can only delete category you have!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
