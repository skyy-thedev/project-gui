import { useAuth } from "../contexts/AuthContext";
import "../styles/dashHeader.css";

export default function DashHeader() {
  const { user } = useAuth();
  if (!user) return null;

  const defaultAvatar =
    "https://ui-avatars.com/api/?name=" + encodeURIComponent(user.nome) + "&background=random";

  return (
    <header className="dash-header">
      
      {/* LEFT MENU */}
      <div className="dash-left">
        <button className="dash-btn">⚙ Config.</button>
      </div>

      {/* CENTER WELCOME */}
      <div className="dash-center">
        <h1>Bem-vindo de volta, <strong>{user.nome}</strong> 👋</h1>
        <p className="user-role">Função: <strong>{user.role.toUpperCase()}</strong></p>
      </div>

      {/* RIGHT USER BOX */}
      <div className="dash-right">
        <div className="dash-info">
          <span className="name">{user.nome}</span>
          <span className="role">{user.role}</span>
        </div>
        <img 
          src={user.foto || defaultAvatar} 
          alt="avatar" 
          className="dash-avatar" 
        />
      </div>

    </header>
  );
}
