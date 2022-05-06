const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

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
      res.status(400).json("Wrong credentials!");
    } else {
      const validated = await bcrypt.compare(req.body.password, user.password);
      if (!validated) {
        res.status(400).json("Wrong credentials!");
      } else {
        const { password, ...others } = user._doc;
        res.status(200).json(others);
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

// const router = require("express").Router();
// const User = require("../models/User");
// const CryptoJS = require("crypto-js");
// const jwt = require("jsonwebtoken");

// //REGISTER
// router.post("/register", async (req, res) => {
//   const newUser = new User({
//     id: req.body.id,
//     username: req.body.username,
//     password: CryptoJS.AES.encrypt(
//       req.body.password,
//       process.env.PASS_SEC
//     ).toString(),
//     name: req.body.name,
//     appointment: req.body.appointment,
//   });

//   try {
//     const savedUser = await newUser.save();
//     res.status(201).json(savedUser);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //LOGIN

// router.post("/login", async (req, res) => {
//   try {
//     const user = await User.findOne({
//       userName: req.body.user_name,
//     });

//     !user && res.status(401).json("Wrong User Name");

//     const hashedPassword = CryptoJS.AES.decrypt(
//       user.password,
//       process.env.PASS_SEC
//     );

//     const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

//     const inputPassword = req.body.password;

//     originalPassword != inputPassword && res.status(401).json("Wrong Password");

//     const accessToken = jwt.sign(
//       {
//         id: user._id,
//         isAdmin: user.isAdmin,
//       },
//       process.env.JWT_SEC,
//       { expiresIn: "3d" }
//     );

//     const { password, ...others } = user._doc;
//     res.status(200).json({ ...others, accessToken });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;
