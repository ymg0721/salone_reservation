import React from "react";
import ReactDOM from "react-dom/client";
import FooterMenu from "./components/footer.tsx";
import { menuItems } from "./data/menuItems.ts";
import RouterApp from "./router/index.tsx";
import reportWebVitals from "./reportWebVitals";
import styled from "@emotion/styled";
import LogoTitle from "./img/logo.png";
import "../src/index.css";

const AWrapper02 = styled.a`
  backdrop-filter: blur(100px);
  bottom: 98px;
  border-radius: 50px;
  color: #fff;
  padding: 20px;
  position: fixed;
  right: 0;
  font-weight: 600;
`;

const HeaderWrapper = styled.header`
  width: -webkit-fill-available;
  position: fixed;
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
      <HeaderWrapper>
        <a href="/home" style={{ textDecoration: "none" }}>
          <H1Wrapper>Venere Emi</H1Wrapper>
        </a>
        <ImgWrapper src={LogoTitle} alt="" />
      </HeaderWrapper>
      <RouterApp />
      <AWrapper02 href="/home" id="a2">
        ホームへ
      </AWrapper02>
      <FooterMenu menuItems={menuItems} />
    </ConditionalDiv>
    <ConditionalDiv2 shouldRender={window.innerHeight > window.innerWidth}>
      <h1>画面を縦にしてください。</h1>
    </ConditionalDiv2>
  </React.StrictMode>
);

reportWebVitals();
