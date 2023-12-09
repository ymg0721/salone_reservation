import React from "react";
import ReactDOM from "react-dom/client";
import FooterMenu from "./components/footer.tsx";
import { menuItems } from "./data/menuItems.ts";
import RouterApp from "./router/index.tsx";
import reportWebVitals from "./reportWebVitals";
import styled from "@emotion/styled";
import "./index.css";
import LogoTitle from "./img/logo.png";

const AWrapper01 = styled.a`
  background-color: #1cb4d3;
  bottom: 162px;
  color: #fff;
  padding: 20px;
  position: fixed;
  right: 0;
`;

const AWrapper02 = styled.a`
  background-color: #1cb4d3;
  bottom: 98px;
  color: #fff;
  padding: 20px;
  position: fixed;
  right: 0;
`;

const HeaderWrapper = styled.header`
  width: -webkit-fill-available;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 1;
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      {window.location.pathname !== "/" && (
        <HeaderWrapper>
          <h1 style={{ color: "white" }}>Venere Emi Flower Salone</h1>
          <img src={LogoTitle} alt="" style={{ width: "30%" }} />
        </HeaderWrapper>
      )}
      <RouterApp />
      {window.location.pathname !== "/" && (
        <AWrapper01 href="/home" id="a1">
          ホームへ戻る
        </AWrapper01>
      )}
      {window.location.pathname !== "/" && (
        <AWrapper02 href="/reservation01" id="a2">
          レッスンのご予約
        </AWrapper02>
      )}
      {window.location.pathname !== "/" && <FooterMenu menuItems={menuItems} />}
    </div>
  </React.StrictMode>
);

reportWebVitals();
