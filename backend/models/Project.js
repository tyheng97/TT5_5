const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    user_id:{
      type: mongoose.SchemaTypes.ObjectId,ref:'User'
    },
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required:true,
    },
    budget: {
      type:Number,
      required:true,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
