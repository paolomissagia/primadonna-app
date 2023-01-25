const mongoose = require("mongoose");
const { Schema } = mongoose;

const operaSchema = new Schema({
  title: String,
  composer: String,
  language: String,
  premiere: String,
  image: String,
  description: String,
});

module.exports = mongoose.models.Opera || mongoose.model("Opera", operaSchema);
