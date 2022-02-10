import React from "react";
import App from "./App";
import ReactDOM from "react-dom";

import "./resources/theme/antd/antd.less";
import "./resources/theme/antd/antd.scss";

import { Store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./resources/theme/styled/theme";
import { GlobalStyle } from "./resources/theme/styled/global";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
          <GlobalStyle />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
