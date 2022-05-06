const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    project_id: {
      type: Number,
      required: true,
    },
    user_id: {
      type: Number,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
