import React, { useState } from "react";
import styled from "@emotion/styled";
import { format } from "date-fns";
import HomeLink from "../components/homeLink";
import Calendar from "../components/calender";
import ReservationImage from "../components/reservationImage";
import { Wrapper, DetailWrapper } from "../components/detailWrapper";
import { reservationData } from "../data/reservationData";
import Header from "../components/header";
import FooterMenu from "../components/footer";
import { menuItems } from "../data/menuItems";

const Reservation01: React.FC = () => {
  // パンくずリスト
  const multipleBreadcrumbs = [
    { label: "ホーム", to: "/home" },
    { label: "ご予約画面➀", to: "/reservation01" },
  ];

  const [selectedDate, setSelectedDate] = useState("");

  // 日付を選択する関数
  const handleDayClick = (date: Date) => {
    const formattedDate = date ? format(date, "yyyy/MM/dd") : "";
    setSelectedDate(formattedDate);
  };

  return (
    <Wrapper>
      <Header />
      <ReservationImage />
      <DetailWrapper>
        <TestWrpapper>
          <HomeLink items={multipleBreadcrumbs} />
          <Calendar onDayClick={handleDayClick} />
          <ReservationWrapper>
            {selectedDate &&
            reservationData.some((item) => item.date === selectedDate) ? (
              <>
                <h3>{String(selectedDate)}選択可能レッスン一覧</h3>
                <a
                  href="/reservation02"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <TicketStyled>
                    <img
                      src={
                        reservationData.find(
                          (item) => item.date === selectedDate
                        )?.src
                      }
                      alt=""
                      style={{
                        borderRadius: "15px",
                        margin: "8vw 3vw 6vw",
                        maxHeight: "30vw",
                      }}
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
                        {
                          reservationData.find(
                            (item) => item.date === selectedDate
                          )?.title
                        }
                      </h2>
                      <p>
                        {
                          reservationData.find(
                            (item) => item.date === selectedDate
                          )?.detail
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
      <FooterMenu menuItems={menuItems} />
    </Wrapper>
  );
};

const H4Wrapper = styled.div`
  padding: 3vw 8vw;
  text-align: left;
  border-radius: 3px 3px 30px 30px;
  background: antiquewhite;
`;

const TicketStyled = styled.div`
  text-align: center;
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
  margin: 32vw 8vw 40vw 8vw;
  height: 125%;
  width: -webkit-fill-available;
  -webkit-backdrop-filter: blur(70px);
  backdrop-filter: blur(70px);
  border-radius: 24px;
`;

export default Reservation01;
