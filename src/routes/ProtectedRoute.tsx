import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../server/context/authContext";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) return <div>Loading...</div>;
    console.log(user)
    if (!user) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
};
