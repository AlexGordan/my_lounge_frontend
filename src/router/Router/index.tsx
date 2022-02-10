import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
// import AuthLayout from "../../layouts/AuthLayout";
import { IRoute } from "../../types/Route";
import { authorizedRoutes, routes } from "../routes";

interface IProps {
  isAuthorized: boolean;
}

const useRoutes = ({ isAuthorized }: IProps) => {
  const renderRoute = (route: IRoute, index: number) => {
    return (
      <Route
        key={route.component}
        element={
          <route.layout>
            <Outlet />
          </route.layout>
        }
      >
        <Route path={route.path} element={<route.component />} />
      </Route>
    );
  };
  return (
    <Routes>
      {!isAuthorized ? routes.map(renderRoute) : authorizedRoutes.map(renderRoute)}
    </Routes>
  );
};

export default useRoutes;
