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
    { label: "ご予約画面➃", to: "/reservation04" },
  ];

  return (
    <Wrapper>
      <HomeLink items={multipleBreadcrumbs} />
      <WrapperStyled>
        <h1>
          予約が確定しました！
          <br />
          山田花子様のお越しを
          <br />
          お待ちしております！
        </h1>
        {/* TODO：アニメーションコンポーネント追加 */}
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
  height: 100vh;
`;

export default Reservation;
