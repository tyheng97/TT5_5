const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    name: String,
    required: true,
    unique: true,
},
{ timestamps: true }
);

module.exports = moongose.nodel("Category", CategorySchema);