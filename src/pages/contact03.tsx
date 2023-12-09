import React from "react";
import styled from "@emotion/styled";
import HomeLink from "../components/homeLink";

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
    </Wrapper>
  );
};

const WrapperStyled = styled.div`
  overflow-y: auto;
  max-height: 500px;
  margin: 20px 10vw;
`;

const Wrapper = styled.div`
  background: rgb(247, 246, 245);
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  min-height: 100vh;
`;

export default Contact03;
