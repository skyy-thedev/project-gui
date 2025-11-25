require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const cursosRoutes = require("./routes/Cursos");


const app = express();
app.use(cors());
app.use(express.json());

// Rotas
app.use("/auth", authRoutes);
app.use("/cursos", cursosRoutes);

// Conecta no banco
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🔥 Servidor rodando na porta ${PORT}`));
