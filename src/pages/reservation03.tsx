import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import HomeLink from "../components/homeLink";
import ReservationImage from "../components/reservationImage";
import {
  Wrapper,
  DetailWrapper,
  ScrollChildrenWrpapper,
} from "../components/detailWrapper";

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
      <ReservationImage />
      <DetailWrapper>
        <ScrollChildrenWrpapper>
          <HomeLink items={multipleBreadcrumbs} />
          <WrapperStyled>
            <h1>ご予約確定画面へ</h1>
            <h2>ご自身のお名前：</h2>
            <PWrapper>{name}</PWrapper>
            <h2>ご自身のメールアドレス:</h2>
            <PWrapper>{email}</PWrapper>
            <h2>ご自身のお電話番号：</h2>
            <PWrapper>{phone}</PWrapper>
            <h2>レッスン日程：</h2>
            <PWrapper>aaaaaaaa</PWrapper>
            <br /> <br />
            <button type="button" onClick={handleEvent}>
              この内容で確定する
            </button>
          </WrapperStyled>
        </ScrollChildrenWrpapper>
      </DetailWrapper>
    </Wrapper>
  );
};

const WrapperStyled = styled.div`
  overflow-y: auto;
  margin: 20px 10vw 0;
`;

const PWrapper = styled.p`
  textdecoration: underline;
`;

export default Reservation;
