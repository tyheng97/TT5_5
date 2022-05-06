const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    project_id: {
      type: String,
      required: true,
    },
    category_id: {
      type: String,
      required: true,
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
