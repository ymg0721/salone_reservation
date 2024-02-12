import React from "react";
import ReactDOM from "react-dom/client";
import RouterApp from "./router/index.tsx";
import reportWebVitals from "./reportWebVitals";
import styled from "@emotion/styled";
import BotomUp from "../src/components/bottomUp.tsx";
import "../src/index.css";

const ConditionalDiv = styled.div`
  @media (min-aspect-ratio: 1.1) {
    display: none;
  }
`;

const ConditionalDiv2 = styled.div`
  display: flex;
  justify-content: center;
  margin: 20vw 0;
  @media (max-aspect-ratio: 1) {
    display: none;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConditionalDiv shouldRender={window.innerHeight < window.innerWidth}>
      <RouterApp />
      <BotomUp />
    </ConditionalDiv>
    <ConditionalDiv2 shouldRender={window.innerHeight > window.innerWidth}>
      <h1>画面を縦にしてください。</h1>
    </ConditionalDiv2>
  </React.StrictMode>
);

reportWebVitals();
