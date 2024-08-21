import { ReactNode } from "react";
import { useAuthContext } from "./auth-context";
import CommonPreloader from "../components/common-preloader";
import { Navigate } from "react-router-dom";

const GuestGuard = ({ children }: { children: ReactNode }) => {
    const { isAuthenticated, isInitialized } = useAuthContext();

    if (isAuthenticated) return <Navigate to='/' />;

    if (!isInitialized) return <CommonPreloader />

  return <>{children}</>;
}

export default GuestGuard;