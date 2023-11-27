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
  ];

  return (
    <Wrapper>
      <HomeLink items={multipleBreadcrumbs} />
      <WrapperStyled>
        <h1>
          お客様のご連絡先を
          <br />
          入力してください！
        </h1>
        <h2>ご自身のお名前</h2>
        <input type="text" />
        <h2>ご自身のメールアドレス</h2>
        <input type="text" />
        <h2>ご自身のお電話番号</h2>
        <input type="text" />
        <br /> <br />
        <a href="/reservation03">
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
  background: rgb(247, 246, 245);
  height: 100vh;
`;

export default Reservation;
