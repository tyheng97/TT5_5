const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    // user_id:{
      
    // }
    username: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },
    appointment: {
      type: String,
    },
    name: {
      type: String,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
