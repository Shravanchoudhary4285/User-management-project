const mongoose = require("mongoose");
const categoryschema = mongoose.Schema({
  catname: {
    type: String,
    trim: true,
  },
  caticon: {
    type: String,
    trim: true,
  },
});
const categorymodel = mongoose.model("category", categoryschema);
module.exports = categorymodel;
