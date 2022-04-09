import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./store/auth-context";
// 리액트 컨텍스트 사용 -> provider 다른 컴포넌트나 후대의 컴포넌트를 감쌀 수 있다.
ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById("root")
);
