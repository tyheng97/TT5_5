const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required:true,
    },
    budget: {
      type:float,
      required:true,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
