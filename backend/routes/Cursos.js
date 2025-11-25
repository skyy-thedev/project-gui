const express = require("express");
const router = express.Router();
const Curso = require("../models/Cursos");
const auth = require("../middlewares/authMiddleware");

router.get("/", auth([ "admin", "god"]), async (req, res) =>{
  try {
    const cursos = await Curso.find().sort({ criadoEm: -1 });
    res.json({ cursos });
  } catch (err) {
    res.status(500).json({ msg: "Erro ao carregar cursos" });
  }
});

router.post("/", auth(["admin", "god"]), async (req, res) => {
  try {
    const curso = new Curso(req.body);
    await curso.save();
    res.json({ msg: "Curso criado com sucesso!", curso });
  } catch (err) {
    res.status(400).json({ msg: "Erro ao criar curso", error: err.message });
  }
});

router.put("/:id", auth(["admin", "god"]), async (req, res) => {
  try {
    const curso = await Curso.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ msg: "Curso atualizado!", curso });
  } catch {
    res.status(400).json({ msg: "Erro ao atualizar curso" });
  }
});

router.delete("/:id", auth(["admin", "god"]), async (req, res) => {
  try {
    await Curso.findByIdAndDelete(req.params.id);
    res.json({ msg: "Curso removido!" });
  } catch {
    res.status(400).json({ msg: "Erro ao remover curso" });
  }
});

module.exports = router;
