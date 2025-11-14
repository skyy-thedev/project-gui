import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useLocation } from "wouter";

function Inicio() {
  const [theme, setTheme] = useState("noob");
  const [stars, setStars] = useState([]);
  const [showLogo, setShowLogo] = useState(false);
  const [, setLocation] = useLocation();

  // Constantes temporárias para simular login
  const USER = "admin";
  const PASS = "1234";

  // Alterna tema
  useEffect(() => {
    const existingLink = document.getElementById("tema-css");
    if (existingLink) existingLink.remove();

    const link = document.createElement("link");
    link.id = "tema-css";
    link.rel = "stylesheet";
    link.href = `${process.env.PUBLIC_URL}/${theme}.css`;
    document.head.appendChild(link);
  }, [theme]);

  // Gera estrelas apenas uma vez
  useEffect(() => {
    const newStars = Array.from({ length: 80 }).map(() => ({
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2 + "s",
    }));
    setStars(newStars);
  }, []);

  // Delay para exibir o logo
  useEffect(() => {
    if (theme === "pro") {
      const timer = setTimeout(() => setShowLogo(true), 1200);
      return () => clearTimeout(timer);
    } else {
      setShowLogo(false);
    }
  }, [theme]);

  // Alterna tema
  const changeTheme = () => setTheme(prev => (prev === "noob" ? "pro" : "noob"));

  // Validação de login fake
  const handleLogin = () => {
    const user = document.getElementById("nameInput").value;
    const pass = document.getElementById("passInput").value;

    if (user === USER && pass === PASS) {
      alert("Login realizado com sucesso!");
      setLocation("/dashboard");
    } else {
      alert("Usuário ou senha inválidos.");
    }
  };

    const board = () => {
      setLocation("/dashboard");
    };

  return (
    <>
      <div className="stars">
        {stars.map((star, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: star.top,
              left: star.left,
              width: star.size + "px",
              height: star.size + "px",
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

      <div className="login">
        <h1>Login</h1>
        <label htmlFor="nameInput">User:</label> <br />
        <input
          id="nameInput"
          type="text"
          placeholder="Digite seu usuário"
          autoComplete="off"
        />{" "}
        <br />
        <label htmlFor="passInput">Password:</label> <br />
        <input
          id="passInput"
          type="password"
          placeholder="Digite a sua senha"
          autoComplete="new-password"
        />{" "}
        <br />
        <br />
        <button id="send-btn" onClick={handleLogin}>
          Entrar
        </button>

        <p>
          Esqueceu a sua senha? <br /> <a href="/forget">Recuperar Senha</a>
        </p>
      </div>

      <div className="transform-btn">
        <button id="btn-to-transform" onClick={changeTheme}>
          {theme === "noob" ? <FaMoon /> : <FaSun />}
          <span> MUDAR TEMA</span>
        </button>
      </div>

      <div className="dash-container">
        <button onClick={board}>Dashboard</button>
      </div>
        
      
      

      {/* Logo com delay + fade-in */}
      {theme === "pro" && (
        <div className={`logo-container ${showLogo ? "visible" : ""}`}>
          <a href="http://www.skyzdesign.com.br">
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" />
            <p>SkyZ Design © 2025 All rights reserved</p>
          </a>
        </div>
      )}

      {theme === "noob" && (
        <div className={`logo-container ${showLogo ? "visible" : ""}`}>
          <a href="http://www.skyzdesign.com.br">
            <img src={`${process.env.PUBLIC_URL}/logo2.0.png`} alt="Logo2" />
            <p>Grow Design © 2025 All rights reserved</p>
          </a>
        </div> 
      )}
      

    </>
  );
}

export default Inicio;