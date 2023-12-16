import React from "react";
import { useLocation } from "react-router-dom";
import styled from "@emotion/styled";
// import HomeLink from "../components/homeLink";
import ReservationImage from "../components/reservationImage";
import { Wrapper, DetailWrapper } from "../components/detailWrapper";
import { useNavigate } from "react-router-dom";

const Reservation: React.FC = () => {
  // パンくずリスト
  // const multipleBreadcrumbs = [
  //   { label: "ホーム", to: "/home" },
  //   { label: "ご予約画面➀", to: "/reservation01" },
  //   { label: "ご予約画面➁", to: "/reservation02" },
  //   { label: "ご予約画面➂", to: "/reservation03" },
  //   { label: "ご予約画面➃", to: "/reservation04" },
  // ];

  const location = useLocation();
  const { state } = location;
  const { name } = state;
  const navigate = useNavigate();
  const handleSubmit = async () => {
    navigate("/home");
  };

  return (
    <Wrapper>
      <ReservationImage />
      <DetailWrapper>
        <ScrollChildrenWrpapper>
          {/* <HomeLink items={multipleBreadcrumbs} /> */}
          <WrapperStyled>
            <h1 style={{ fontSize: "5vw" }}>
              予約が確定しました！
              <br />
              {name}様のお越しを
              <br />
              お待ちしております！
            </h1>
            {/* TODO：アニメーションコンポーネント追加 */}
            <ButtonStyled onClick={handleSubmit}>ホームへ戻る</ButtonStyled>
          </WrapperStyled>
        </ScrollChildrenWrpapper>
      </DetailWrapper>
    </Wrapper>
  );
};

const WrapperStyled = styled.div`
  overflow-y: auto;
  margin: 20px 10vw 0;
  padding-bottom: 5vw;
`;

const ScrollChildrenWrpapper = styled.div`
  margin: 70vw 8vw 40vw 8vw;
  width: -webkit-fill-available;
  -webkit-backdrop-filter: blur(70px);
  backdrop-filter: blur(70px);
  border-radius: 24px;
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

export default Reservation;
