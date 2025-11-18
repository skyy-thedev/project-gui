import { useState } from "react";
import { FiHome, FiUser, FiBook, FiBarChart2, FiLogOut } from "react-icons/fi";
import { useLocation } from "wouter";
import LogoIdentyFlow from '../assets/pngs/Logo Principal IdenfyFlow.png'
import "../styles/NavBar.css";

export default function Sidebar({ onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [, setLocation] = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const logout = () => setLocation("/");

  const menuItems = [
    { icon: <FiHome size={30} />, label: "Dashboard", action: () => onSelect("dashboard") },
    { icon: <FiUser size={30} />, label: "Cadastro", action: () => onSelect("cadastro") },
    { icon: <FiBook size={30} />, label: "Historico", action: () => onSelect("historico") },
    { icon: <FiBarChart2 size={30} />, label: "Resumo", action: () => onSelect("resumo") },
    { icon: <FiLogOut size={30} />, label: "Logout", action: logout },
  ];

  return (
    <div className={isOpen ? "sidebar open" : "sidebar"}>
      {/* LOGO + BOTÃO */}
      <div className="sidebar-header">
        <div className="logo-area">
          <img src={LogoIdentyFlow} alt="logo" className="logo-img" onClick={toggleSidebar} />
          {isOpen && <h1 className="logo-text">IdentyFlow</h1>}
        </div>
      </div>

      {/* MENU */}
      <nav className="sidebar-menu">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item" onClick={item.action}>
            {item.icon}
            {isOpen && <span className="item-text">{item.label}</span>}
          </div>
        ))}
      </nav>
    </div>
  );
}
