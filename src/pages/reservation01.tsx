import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { format } from "date-fns";
import HomeLink from "../components/homeLink";
import Calendar from "../components/calender";

interface ReservationType {
  id: number;
  src?: string;
  title?: string;
  date?: string;
  detail?: string;
}

const Reservation01: React.FC = () => {
  // パンくずリスト
  const multipleBreadcrumbs = [
    { label: "ホーム", to: "/home" },
    { label: "ご予約画面➀", to: "/reservation01" },
  ];

  const [selectedDate, setSelectedDate] = useState("");
  const [data, setData] = useState<ReservationType[]>([]);
  // const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3001/api/v1/calender")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        console.log(json, "作品のDBに接続できました");
      });
  }, []);

  // 日付を選択する関数
  const handleDayClick = (date: Date) => {
    const formattedDate = date ? format(date, "yyyy/MM/dd") : "";
    setSelectedDate(formattedDate);
  };

  return (
    <Wrapper>
      <HomeLink items={multipleBreadcrumbs} />
      <div style={{ overflowY: "auto" }}>
        <Calendar onDayClick={handleDayClick} />
        {selectedDate && data.some((item) => item.date === selectedDate) ? (
          <>
            <h3>{String(selectedDate)}選択可能レッスン一覧</h3>
            <a href="/reservation02">
              <TicketStyled>
                <img
                  src={data.find((item) => item.date === selectedDate)?.src}
                  alt=""
                />
                <h4>
                  {data.find((item) => item.date === selectedDate)?.title}
                </h4>
                <p>{data.find((item) => item.date === selectedDate)?.detail}</p>
                <time dateTime={selectedDate}>{selectedDate}</time>
              </TicketStyled>
            </a>
          </>
        ) : (
          <p>選択された日付のレッスンはありません。</p>
        )}
      </div>
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
