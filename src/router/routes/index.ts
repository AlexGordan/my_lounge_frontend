import AuthLayout from "../../layouts/AuthLayout";
import MainLayout from "../../layouts/MainLayout";
import SignIn from "../../pages/Auth/SignIn/SignIn";
import SignUp from "../../pages/Auth/SignUp/SignUp";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Home from "../../pages/Home/Home";
import { IRoute } from "../../types/Route";

export const routes: IRoute[] = [
  {
    path: "/",
    component: Home,
    exact: true,
    layout: AuthLayout,
  },
  {
    path: "/signup",
    component: SignUp,
    exact: true,
    layout: AuthLayout,
  },
  {
    path: "/signin",
    component: SignIn,
    exact: true,
    layout: AuthLayout,
  },
];

export const authorizedRoutes: IRoute[] = [
  {
    path: "/dashboard",
    component: Dashboard,
    exact: true,
    layout: MainLayout,
  },
];
