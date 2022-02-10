import React, { useEffect } from "react";

import { Spin } from "antd";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { initializeApp } from "./redux/actions/app";
import { getToken } from "./helpers/auth";
import useRoutes from "./router/Router";

const App = () => {
  const dispatch = useDispatch();
  const isAppInitialized = useSelector((state: any) => state.appReducer.isAppInitialized);
  const isAuthorized = !!getToken();

  const routes = useRoutes({ isAuthorized });

  useEffect(() => {
    dispatch(initializeApp());
  }, [dispatch]);

  if (!isAppInitialized) {
    return (
      <LoadWrapper>
        <Spin />
      </LoadWrapper>
    );
  }

  return <>{routes}</>;
};

const LoadWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
