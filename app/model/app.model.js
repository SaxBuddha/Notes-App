//Set default database

const mongoose = require("mongoose");

const AppSchema = mongoose.Schema(

  {note: String}
  //{
  //note: String
  //}

);

module.exports = mongoose.model("App", AppSchema);
