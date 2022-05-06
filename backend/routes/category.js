const router = require("express").Router();
const bcrypt = require("bcrypt");
const Category = require("../models/Category");

  //GET CAT
  router.get("/:id", async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        res.status(200).json(others);
    }
    catch (err) {
        res.status(500).json(err)
    }
  });
  

//UPDATE CAT
router.put("/:id", async (req, res) => {
    if (req.body.categoryId === req.params.id) {
      try {
        const updatedCategory = await Category.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedCategory);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("No such Category!");
    }
  });
  
  module.exports = router;
  
  