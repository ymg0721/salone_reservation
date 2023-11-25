import React from "react";
import styled from "@emotion/styled";
import HomeLink from "../components/homeLink";
import Footer from "../components/footer";
import Calender from "../components/calender";
import { menuItems } from "../data/menuItems";

const Reservation01: React.FC = () => {
  // パンくずリスト
  const multipleBreadcrumbs = [
    { label: "ホーム", to: "/home" },
    { label: "ご予約画面➀", to: "/reservation01" },
  ];

  return (
    <Wrapper>
      <HomeLink items={multipleBreadcrumbs} />
      <div style={{ overflowY: "auto", maxHeight: "500px" }}>
        <Calender />
        <h3>選択可能レッスン一覧</h3>
        {/* チケットコンポーネント */}
        <a href="/reservation02">
          <TicketStyled>
            <h4>ミモザ</h4>
            <time dateTime="2023-11-25">2023/11/25</time>
          </TicketStyled>
        </a>
      </div>
      <Footer menuItems={menuItems} />
    </Wrapper>
  );
};

const TicketStyled = styled.div`
  margin: 20px;
  padding: 10px;
  height: 100%;
  border: 1px solid gray;
  background-color: #f0d0f0;
`;

const Wrapper = styled.div`
  background: pink;
  height: 100vh;
`;

export default Reservation01;
