const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema(
  {
    project_id: {
      type: String,
      required: true,
      ref:'Project'
    },
    category_id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    amount: {
      type: Number,
      required: true,
    },
    created_at: {
      type: Date,
      required: true,
    },
    created_by: {
      type: String,
      required: true,
    },
    updated_at: {
      type: Date,
      required: true,
    },
    updated_by: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Expense", ExpenseSchema);
