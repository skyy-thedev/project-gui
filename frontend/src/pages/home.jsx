import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import logoIdentyFlow from '../assets/pngs/Sublogo IdentifyFlow Branco.png'
import '../styles/home.css';

function Inicio() {
  const [stars, setStars] = useState([]);
  const [, setLocation] = useLocation();

  // Constantes temporárias para simular login
  const USER = "admin";
  const PASS = "1234";

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
          <div className="dash-container">
            <button onClick={board}>Go to dashboard → </button>
          </div>
        <h1>Acesse sua conta</h1>
        <label htmlFor="nameInput">Usuário:</label> <br />
        <input
          id="nameInput"
          type="text"
          placeholder="Digite seu usuário"
          autoComplete="off"
        />{" "}
        <br />
        <label htmlFor="passInput">Senha:</label> <br />
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

        {/* Logo com delay + fade-in */}
        <div className='logo-container' >
          <a href="http://www.identyflow.com.br">
            <img src={logoIdentyFlow} alt="Logo" />
            <p>SkyZ Design © 2025 All rights reserved</p>
          </a>
        </div>
        

      {/* Logo com delay + fade-in
              <div className='logo-container' >
          <a href="http://www.skyzdesign.com.br">
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" />
            <p>SkyZ Design © 2025 All rights reserved</p>
          </a>
        </div>
      
      */}
    </>
  );
}

export default Inicio;