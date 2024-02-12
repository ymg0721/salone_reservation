import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
// import HomeLink from "../components/homeLink";
import ReservationImage from "../components/reservationImage";
import { Wrapper, DetailWrapper } from "../components/detailWrapper";
import Header from "../components/header";
import FooterMenu from "../components/footer";
import { menuItems } from "../data/menuItems";

const Reservation: React.FC = () => {
  // パンくずリスト
  // const multipleBreadcrumbs = [
  //   { label: "ホーム", to: "/home" },
  //   { label: "ご予約画面➀", to: "/reservation01" },
  //   { label: "ご予約画面➁", to: "/reservation02" },
  //   { label: "ご予約画面➂", to: "/reservation03" },
  // ];

  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const { name, email, phone } = state;

  const handleEvent = () => {
    navigate("/reservation04", { state: { name } });
  };

  return (
    <Wrapper>
      <Header />

      <ReservationImage />
      <DetailWrapper>
        <ScrollChildrenWrpapper>
          {/* <HomeLink items={multipleBreadcrumbs} /> */}
          <WrapperStyled>
            <h1 style={{ fontSize: "5vw", marginTop: "11vw" }}>
              ご予約確定画面へ
            </h1>
            <h2 style={{ fontSize: "4vw" }}>ご自身のお名前：</h2>
            <PWrapper>{name}</PWrapper>
            <h2 style={{ fontSize: "4vw" }}>ご自身のメールアドレス:</h2>
            <PWrapper>{email}</PWrapper>
            <h2 style={{ fontSize: "4vw" }}>ご自身のお電話番号：</h2>
            <PWrapper>{phone}</PWrapper>
            <h2 style={{ fontSize: "4vw" }}>レッスン日程：</h2>
            <PWrapper>aaaaaaaa</PWrapper>

            <ButtonStyled onClick={handleEvent}>
              この内容で確定する
            </ButtonStyled>
          </WrapperStyled>
        </ScrollChildrenWrpapper>
      </DetailWrapper>
      <FooterMenu menuItems={menuItems} />
    </Wrapper>
  );
};

const WrapperStyled = styled.div`
  overflow-y: auto;
  margin: 20px 10vw 0;
  padding-bottom: 5vw;
`;

const PWrapper = styled.p`
  textdecoration: underline;
  color: #fdfdfd;
  font-weight: 700;
  font-size: 4.5vw;
  margin-top: 0;
`;

const ButtonStyled = styled.button`
  transition: 0.2s ease-in-out;
  text-align: center;
  display: inline-block;
  border: none;
  width: 60vw;
  height: 40px;
  color: #fff;
  background-color: #3b2f2f;
  border-radius: 20px;
`;

const ScrollChildrenWrpapper = styled.div`
  margin: 40vw 8vw 40vw 8vw;
  width: -webkit-fill-available;
  -webkit-backdrop-filter: blur(70px);
  backdrop-filter: blur(70px);
  border-radius: 24px;
`;

export default Reservation;
