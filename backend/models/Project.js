const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: false,
    },

    description: {
      type: String,
      required:true,
      required: false,
    },
    budget: {
      type:float,
      required:true,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
