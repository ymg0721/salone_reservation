import React, { useState } from "react";
import styled from "@emotion/styled";
import { format } from "date-fns";
import HomeLink from "../components/homeLink";
import Footer from "../components/footer";
import Calendar from "../components/calender";
import { menuItems } from "../data/menuItems";

const Reservation01: React.FC = () => {
  // パンくずリスト
  const multipleBreadcrumbs = [
    { label: "ホーム", to: "/home" },
    { label: "ご予約画面➀", to: "/reservation01" },
  ];

  const [selectedDate, setSelectedDate] = useState("");
  const handleDayClick = (date: Date) => {
    // 選択された日付に対する処理をここに書く
    console.log(selectedDate);

    const formattedDate = date ? format(date, "yyyy/MM/dd") : "";
    console.log(formattedDate);
    setSelectedDate(formattedDate);
  };

  return (
    <Wrapper>
      <HomeLink items={multipleBreadcrumbs} />
      <div style={{ overflowY: "auto" }}>
        <Calendar onDayClick={handleDayClick} />
        <h3>{String(selectedDate)}選択可能レッスン一覧</h3>
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
  background: rgb(247, 246, 245);
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  min-height: 100vh;
`;

export default Reservation01;
