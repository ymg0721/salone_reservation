import React from "react";
import { useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import HomeLink from "../components/homeLink";

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
