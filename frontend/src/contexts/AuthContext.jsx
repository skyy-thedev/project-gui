import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  // Carrega o user salvo no localStorage ao iniciar a aplicação
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  // LOGIN REAL — dados vindos do backend (já no LoginForm)
  const login = (userData, token) => {
    const newUser = {
      id: userData.id,
      nome: userData.nome,
      role: userData.role,
      token: token
    };

    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  // Agora recebe um ARRAY corrigido
  const hasAccess = (rolesAllowed) => {
    if (!user) return false;

    // god tem acesso total
    if (user.role === "god") return true;

    return rolesAllowed.includes(user.role);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, hasAccess }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}