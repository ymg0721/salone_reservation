import React from "react";
import styled from "@emotion/styled";
import HomeLink from "../components/homeLink";
import Footer from "../components/footer";
import { menuItems } from "../data/menuItems";

const Contact02: React.FC = () => {
  // パンくずリスト
  const multipleBreadcrumbs = [
    { label: "ホーム", to: "/home" },
    { label: "お問い合わせ➀", to: "/contact01" },
    { label: "お問い合わせ➁", to: "/contact02" },
  ];

  return (
    <Wrapper>
      <HomeLink items={multipleBreadcrumbs} />
      <WrapperStyled>
        <h1>お問い合わせ内容確認</h1>
        <h2>ご自身のメールアドレス</h2>
        <p style={{ textDecoration: "underline" }}>aaaaaaaa</p>
        <h2>お問い合わせ内容</h2>
        <p style={{ textDecoration: "underline" }}>aaaaaaaa</p>
        <br />
        <br />
        <a href="/contact03">
          <input type="button" value="送信する" />
        </a>
      </WrapperStyled>
      <Footer menuItems={menuItems} />
    </Wrapper>
  );
};

const WrapperStyled = styled.div`
  overflowy: auto;
  max-height: 500px;
  margin: 20px 10vw;
`;

const Wrapper = styled.div`
  background: pink;
  height: 100vh;
`;

export default Contact02;
