const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      id: req.body.id,
      username: req.body.username,
      password: hashedPass,
      name: req.body.name,
      appointment: req.body.appointment,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      res.status(400).json("Wrong user!");
    } else {
      const validated = await bcrypt.compare(req.body.password, user.password);
      if (!validated) {
        res.status(400).json("Wrong pw!");
      } else {
        const token = jwt.sign(
          {
            username: user.username,
          },
          "secret123"
        );

        res.status(200).json({ status: "ok", user: token });
      }
    }
  } catch (err) {
    res.status(500).json({ status: "error", user: false });
  }
});

module.exports = router;
