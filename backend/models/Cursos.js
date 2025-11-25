const mongoose = require("mongoose");

const CursoSchema = new mongoose.Schema({
  nome: { type: String, required: true, unique: true },
  cargaHoraria: { type: Number, required: true },
  dias: { type: Number, required: true },
  valorTotal: { type: Number, required: true },
  minVagas: { type: Number, required: true },
  maxVagas: { type: Number, required: true },
  criadoEm: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Curso", CursoSchema);
