import React from "react";
import styled from "@emotion/styled";
import HomeLink from "../components/homeLink";
import Footer from "../components/footer";
import { menuItems } from "../data/menuItems";

const Contact03: React.FC = () => {
  // パンくずリスト
  const multipleBreadcrumbs = [
    { label: "ホーム", to: "/home" },
    { label: "お問い合わせ➀", to: "/contact01" },
    { label: "お問い合わせ➁", to: "/contact02" },
    { label: "お問い合わせ➂", to: "/contact03" },
  ];

  return (
    <Wrapper>
      <HomeLink items={multipleBreadcrumbs} />
      <WrapperStyled>
        <h1>お問い合わせありがとうございます！！</h1>
        <h2>お問い合わせから約1日で返信させていただきます！！</h2>
        <a href="/home">ホームへ戻る</a>
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

export default Contact03;
