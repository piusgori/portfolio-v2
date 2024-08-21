import { useRoutes } from "react-router-dom";
import { useAuthContext } from "../auth/auth-context";
import MainPage from "../pages/main";
import { LoginPage } from "./elements";
import CommonPreloader from "../components/common-preloader";

export default function Router () {

    const { isInitialized } = useAuthContext();

    const routes = useRoutes([
        { element: <MainPage />, index: true },
        {
            path: 'auth',
            children: [
                { path: 'login', element: <LoginPage /> },
            ]
        },
    ]);

    if (!isInitialized) return <CommonPreloader />

    return routes;
}