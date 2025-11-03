import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function Inicio() {
  const [theme, setTheme] = useState("noob");
  const [stars, setStars] = useState([]);
  const [showLogo, setShowLogo] = useState(false); // controle do delay do logo

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

  // Delay de exibição do logo
  useEffect(() => {
    if (theme === "pro") {
      const timer = setTimeout(() => setShowLogo(true), 5000); // 5s delay
      return () => clearTimeout(timer);
    } else {
      setShowLogo(false); // esconde logo se sair do modo pro
    }
  }, [theme]);

  const changeTheme = () => setTheme(prev => (prev === "noob" ? "pro" : "noob"));

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
        <br /> <br />
        <button id="send-btn">Entrar</button>
      </div>

      <div className="transform-btn">
        <button id="btn-to-transform" onClick={changeTheme}>
          {theme === "noob" ? <FaMoon /> : <FaSun />}
          <span> MUDAR TEMA</span>
        </button>
      </div>

      {/* Logo com delay + fade-in */}
      {theme === "pro" && (
        <div className={`logo-container ${showLogo ? "visible" : ""}`}>
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" />
          <p>SkyZ Design © 2025 All rights reserved</p>
        </div>
      )}
    </>
  );
}

export default Inicio;