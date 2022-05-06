const router = require("express").Router();
const Project = require("../models/Project");
const User = require("../models/User");

//create a project
router.post("/create", async (req, res) => {
  const newproject = new Project(req.body);
  try {
    const response = await newproject.save();
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all projects
router.route("/").get(async (req, res) => {
  try {
    res.json(await Project.find());
  } catch (err) {
    res.send(err);
  }
});

//GET Project
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findOne({ project_id: req.params.id });
    const { ...others } = project._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
