const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("../models/User");
const authController = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");


router.post("/login", authController.login);
router.get("/users", authMiddleware(["god", "admin"]), async (req, res) => {
  try {
    const users = await User.find({}, "-senha"); 
    // o "-senha" remove a senha dos resultados por segurança

    res.json({
      total: users.length,
      users
    });

  } catch (error) {
    res.status(500).json({ msg: "Erro ao buscar usuários", error });
  }
});
// POST /auth/register
router.post("/register", async (req, res) => {
  console.log("REQ BODY:", req.body); // Mostra o corpo recebido

  const { nome, email, senha, profissao } = req.body;

  try {
    // Validação básica
    if (!nome || !email || !senha) {
      console.log("Campos obrigatórios faltando");
      return res.status(400).json({ msg: "Campos obrigatórios faltando" });
    }

    // Verifica se usuário já existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("Usuário já existe:", email);
      return res.status(400).json({ msg: "Usuário já existe" });
    }

    // Hash da senha
    const salt = await bcrypt.genSalt(10);
    const hashedSenha = await bcrypt.hash(senha, salt);

    // Criação do usuário
    const newUser = new User({
      nome,
      email,
      senha: hashedSenha,
      profissao,
    });

    const savedUser = await newUser.save();
    console.log("Usuário criado com sucesso:", savedUser);

    res.status(201).json({ msg: "Usuário criado com sucesso", user: savedUser });
  } catch (err) {
    console.error("ERRO AO CRIAR USUÁRIO:", err); // <-- Mostra o erro completo
    res.status(500).json({ msg: "Erro no servidor", error: err.message });
  }
});

module.exports = router;
