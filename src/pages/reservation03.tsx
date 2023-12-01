import React from "react";
import styled from "@emotion/styled";
import HomeLink from "../components/homeLink";
import Footer from "../components/footer";
import { menuItems } from "../data/menuItems";

const Reservation: React.FC = () => {
  // パンくずリスト
  const multipleBreadcrumbs = [
    { label: "ホーム", to: "/home" },
    { label: "ご予約画面➀", to: "/reservation01" },
    { label: "ご予約画面➁", to: "/reservation02" },
    { label: "ご予約画面➂", to: "/reservation03" },
  ];

  return (
    <Wrapper>
      <HomeLink items={multipleBreadcrumbs} />
      <WrapperStyled>
        <h1>ご予約確定画面へ</h1>
        <h2>ご自身のお名前：</h2>
        <p style={{ textDecoration: "underline" }}>aaaaaaaa</p>
        <h2>ご自身のメールアドレス:</h2>
        <p style={{ textDecoration: "underline" }}>aaaaaaaa</p>
        <h2>ご自身のお電話番号：</h2>
        <p style={{ textDecoration: "underline" }}>aaaaaaaa</p>
        <h2>レッスン日程：</h2>
        <p style={{ textDecoration: "underline" }}>aaaaaaaa</p>
        <br /> <br />
        <a href="/reservation04">
          <input type="button" value="この内容で確定する" />
        </a>
      </WrapperStyled>
      <Footer menuItems={menuItems} />
    </Wrapper>
  );
};

const WrapperStyled = styled.div`
  overflow-y: auto;
  max-height: 450px;
  margin: 20px 10vw 0;
`;

const Wrapper = styled.div`
  background: rgb(247, 246, 245);
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  min-height: 100vh;
`;

export default Reservation;
