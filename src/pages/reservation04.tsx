import React from "react";
import { useLocation } from "react-router-dom";
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
    { label: "ご予約画面➃", to: "/reservation04" },
  ];

  const location = useLocation();
  const { state } = location;
  const { name } = state;

  return (
    <Wrapper>
      <ReservationImage />
      <DetailWrapper>
        <ScrollChildrenWrpapper>
          <HomeLink items={multipleBreadcrumbs} />
          <WrapperStyled>
            <h1>
              予約が確定しました！
              <br />
              {name}様のお越しを
              <br />
              お待ちしております！
            </h1>
            {/* TODO：アニメーションコンポーネント追加 */}
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

export default Reservation;
