import React, { useState, useEffect } from "react";
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
      <Calendar onDayClick={handleDayClick} />
      <ReservationWrapper>
        {selectedDate && data.some((item) => item.date === selectedDate) ? (
          <>
            <h3>{String(selectedDate)}選択可能レッスン一覧</h3>
            <a
              href="/reservation02"
              style={{ color: "black", textDecoration: "none" }}
            >
              <TicketStyled>
                <img
                  src={data.find((item) => item.date === selectedDate)?.src}
                  alt=""
                  style={{ borderRadius: "15px" }}
                />
                <H4Wrapper>
                  <time
                    dateTime={selectedDate}
                    style={{
                      textDecoration: "underline",
                    }}
                  >
                    {selectedDate}
                  </time>
                  <h2>
                    {data.find((item) => item.date === selectedDate)?.title}
                  </h2>
                  <p>
                    {data.find((item) => item.date === selectedDate)?.detail}
                  </p>
                </H4Wrapper>
              </TicketStyled>
            </a>
          </>
        ) : (
          <p>選択された日付のレッスンはありません。</p>
        )}
      </ReservationWrapper>
    </Wrapper>
  );
};

const H4Wrapper = styled.div`
  margin-left: 5vw;
`;

const TicketStyled = styled.div`
  display: flex;
  padding: 3vw;
  height: 100%;
  background-color: #f0d0f0;
  border-radius: 30px;
`;

const Wrapper = styled.div`
  background: rgb(247, 246, 245);
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  min-height: 100vh;
`;

const ReservationWrapper = styled.div`
  overflow-y: auto;
  margin: 3vw 8vw;
  padding: 0vw 0 10vw;
`;

export default Reservation01;
