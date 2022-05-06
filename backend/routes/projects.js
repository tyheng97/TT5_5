const router = require("express").Router();
const Project = require("../models/Project");
const User = require("../models/User");

//create a project
router.route("/create")
    .post(async (req, res) => {
        try {
            const user=await User.findById(req.params.user_id);
            
            const newProject = new Project({
                user_id:user,
                name: req.params.name,
                description: req.params.description,
                budget:req.params.budget,
            });
            const project = await newProject.save();
            res.status(200).json(project);
        } catch (err) {
            res.status(500).json(err);
        }
    });

//get all projects
router.route("/")
    .get(async (req, res) => {
        try {
            res.json(await Project.find());
        }
        catch (err) {
            res.send(err);
        }
    });


//get project by id
router.route("/:id").get(async(req,res)=>{
    try {
        const project = await Project.findById(req.params.id);
        const {...others } = project._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
});
//update project by id
router.route("/:id").put(async(req,res)=>{
    if (req.body.projectId === req.params.id) {

        try {
            const updatedProject = await Project.findByIdAndUpdate(
                req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedProject);
        } catch (err) {
        res.status(500).json(err);
        }

    } else {
        res.status(401).json("Please update the correct project.");
    }
});
module.exports=router;