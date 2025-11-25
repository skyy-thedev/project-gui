const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  senha: { type: String, required: true },
  role: { 
    type: String, 
    enum: ["god", "admin", "instrutor"], 
    default: "instrutor" 
  }
});

module.exports = mongoose.model("User", userSchema);