import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import HomeLink from "../components/homeLink";

const Reservation: React.FC = () => {
  // パンくずリスト
  const multipleBreadcrumbs = [
    { label: "ホーム", to: "/home" },
    { label: "ご予約画面➀", to: "/reservation01" },
    { label: "ご予約画面➁", to: "/reservation02" },
    { label: "ご予約画面➂", to: "/reservation03" },
  ];

  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const { name, email, phone } = state;

  const handleEvent = () => {
    navigate("/reservation04", { state: { name } });
  };

  return (
    <Wrapper>
      <HomeLink items={multipleBreadcrumbs} />
      <WrapperStyled>
        <h1>ご予約確定画面へ</h1>
        <h2>ご自身のお名前：</h2>
        <p style={{ textDecoration: "underline" }}>{name}</p>
        <h2>ご自身のメールアドレス:</h2>
        <p style={{ textDecoration: "underline" }}>{email}</p>
        <h2>ご自身のお電話番号：</h2>
        <p style={{ textDecoration: "underline" }}>{phone}</p>
        <h2>レッスン日程：</h2>
        <p style={{ textDecoration: "underline" }}>aaaaaaaa</p>
        <br /> <br />
        <button type="button" onClick={handleEvent}>
          この内容で確定する
        </button>
      </WrapperStyled>
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
