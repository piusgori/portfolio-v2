import { lazy, Suspense } from "react";
import CommonPreloader from "../components/common-preloader";

const Loadable = (Component: any) => (props: any) => (
    <Suspense fallback={<CommonPreloader />}><Component {...props} /></Suspense>
);

export const LoginPage = Loadable(lazy(() => import('../pages/auth/login')));