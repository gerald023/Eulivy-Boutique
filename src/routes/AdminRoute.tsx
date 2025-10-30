// src/routes/AdminRoute.tsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../server/context/authContext";

export const AdminRoute = ({ children }: { children: JSX.Element }) => {
  const { user, isAdmin, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/" replace />;
  if (!isAdmin) return <Navigate to="/dashboard" replace />;

  return children;
};
