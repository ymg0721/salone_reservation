import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { format } from "date-fns";
import HomeLink from "../components/homeLink";
import Calendar from "../components/calender";
import ReservationImage from "../components/reservationImage";
import { Wrapper, DetailWrapper } from "../components/detailWrapper";

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
      });
  }, []);

  // 日付を選択する関数
  const handleDayClick = (date: Date) => {
    const formattedDate = date ? format(date, "yyyy/MM/dd") : "";
    setSelectedDate(formattedDate);
  };

  return (
    <Wrapper>
      <ReservationImage />
      <DetailWrapper>
        <TestWrpapper>
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
                      style={{ borderRadius: "15px", margin: "3vw" }}
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
                        {
                          data.find((item) => item.date === selectedDate)
                            ?.detail
                        }
                      </p>
                    </H4Wrapper>
                  </TicketStyled>
                </a>
              </>
            ) : (
              <p style={{ fontWeight: "700" }}>
                選択された日付のレッスンはありません。
              </p>
            )}
          </ReservationWrapper>
        </TestWrpapper>
      </DetailWrapper>
    </Wrapper>
  );
};

const H4Wrapper = styled.div`
  margin-left: 5vw;
  padding: 3vw 5vw;
  border-radius: 0 30px 30px 0;
  background: antiquewhite;
  width: 60%;
`;

const TicketStyled = styled.div`
  display: flex;
  // padding: 3vw;
  height: 100%;
  background-color: rgb(253, 253, 253);
  border-radius: 30px;
`;

const ReservationWrapper = styled.div`
  overflow-y: auto;
  margin: 3vw 8vw;
  padding: 0vw 0 10vw;
`;

const TestWrpapper = styled.div`
  margin: 90vw 8vw 40vw 8vw;
  height: 110%;
  width: -webkit-fill-available;
  -webkit-backdrop-filter: blur(70px);
  backdrop-filter: blur(70px);
  border-radius: 24px;
`;

export default Reservation01;
