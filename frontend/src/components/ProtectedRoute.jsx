import { Redirect } from "wouter";
import { useAuth } from "../contexts/AuthContext";

export default function ProtectedRoute({ children, roles }) {
  const { user, hasAccess } = useAuth();

  if (!user) return <Redirect to="/" />;
  if (!hasAccess(roles)) return <h2>Acesso negado ❌</h2>;

  return children;
}
