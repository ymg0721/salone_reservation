import React from "react";
import styled from "@emotion/styled";
import HomeLink from "../components/homeLink";
import Footer from "../components/footer";
import { menuItems } from "../data/menuItems";

const Contact01: React.FC = () => {
  // パンくずリスト
  const multipleBreadcrumbs = [
    { label: "ホーム", to: "/home" },
    { label: "お問い合わせ", to: "/contact" },
  ];

  return (
    <Wrapper>
      <HomeLink items={multipleBreadcrumbs} />
      <WrapperStyled>
        <h1>
          なんでもお気軽に
          <br />
          ご相談・お問い合わせください！
        </h1>
        <h2>ご自身のメールアドレス</h2>
        <input type="text" />
        <h2>お問い合わせ内容</h2>
        <input type="text" placeholder="ご自由にお書きください！" />
        <br />
        <br />
        <a href="/contact02">
          <input type="button" value="確定画面へ➡" />
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

export default Contact01;
