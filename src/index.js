import React from "react";
import ReactDOM from "react-dom/client";
import FooterMenu from "./components/footer.tsx";
import { menuItems } from "./data/menuItems.ts";
import RouterApp from "./router/index.tsx";
import reportWebVitals from "./reportWebVitals";
import styled from "@emotion/styled";
import "./index.css";
import LogoTitle from "./img/logo.png";

const AWrapper02 = styled.a`
  backdrop-filter: blur(100px);
  bottom: 98px;
  border-radius: 50px;
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
  align-items: center;
  z-index: 1;
  backdrop-filter: blur(10px);
`;

const H1Wrapper = styled.h1`
  color: white;
  margin: 0;
  padding: 0 5vw 0;
  font-size: 5vw;
`;

const ImgWrapper = styled.img`
  width: 50vw;
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      {window.location.pathname !== "/" && (
        <HeaderWrapper>
          <H1Wrapper>Venere Emi</H1Wrapper>
          <ImgWrapper src={LogoTitle} alt="" />
        </HeaderWrapper>
      )}
      <RouterApp />
      {window.location.pathname !== "/" && (
        <AWrapper02 href="/home" id="a2">
          ホームへ
        </AWrapper02>
      )}
      {window.location.pathname !== "/" && <FooterMenu menuItems={menuItems} />}
    </div>
  </React.StrictMode>
);

reportWebVitals();
