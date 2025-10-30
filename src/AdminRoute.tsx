// src/components/AdminRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./server/context/authContext";

export const AdminRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { loading, user, isAdmin } = useAuth();
  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;
  if (!isAdmin) return <Navigate to="/no-access" replace />;
  return children;
};
