// Calendar.tsx
import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  addDays,
  isSameMonth,
  isSameDay,
  getDay,
} from "date-fns";
import LeftArrow from "../img/arrow-left.svg";
import RightArrow from "../img/arrow-right.svg";

interface CalendarProps {
  onDayClick: (date: Date) => void;
}

const getDaysInMonth = (date: Date): Array<Date | null> => {
  const start = startOfMonth(date);
  const end = endOfMonth(date);
  const days = [];
  let currentDay = start;

  while (currentDay <= end) {
    days.push(currentDay);
    currentDay = addDays(currentDay, 1);
  }

  // Add leading blank days if the month does not start on a Sunday
  const firstDayOfMonth = getDay(start);
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.unshift(null);
  }

  return days;
};

const Calendar: React.FC<CalendarProps> = ({ onDayClick }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = getDaysInMonth(currentMonth).map((date) => ({
    date,
    isCurrentMonth: date ? isSameMonth(date, currentMonth) : false,
    isSelected: date ? isSameDay(date, new Date()) : false,
  }));

  const handlePrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const handleClick = (date: Date) => {
    onDayClick(date);
  };

  return (
    <Container>
      <Header>
        <a onClick={handlePrevMonth}>
          <img src={LeftArrow} alt="" />
        </a>
        <H2Wrapper>{format(currentMonth, "MMMM yyyy")}</H2Wrapper>
        <a onClick={handleNextMonth} style={{ display: "flex" }}>
          <img src={RightArrow} alt="" />
        </a>
      </Header>
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
        <WeekDay key={index}>{day}</WeekDay>
      ))}
      {daysInMonth.map((day, index) => (
        <Day
          key={index}
          isCurrentMonth={day ? day.isCurrentMonth : false}
          isSelected={day ? day.isSelected : false}
          onClick={() => day && day.date && handleClick(day.date)}
        >
          {day && day.date ? format(day.date, "d") : ""}
        </Day>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5vw 5vw 2vw;
`;

const Day = styled.div<{ isCurrentMonth: boolean; isSelected: boolean }>`
  width: calc(100% / 7);
  box-sizing: border-box;
  text-align: center;
  padding: 8px;
  cursor: pointer;
  background-color: ${(props) =>
    props.isSelected
      ? "#3498db"
      : props.isCurrentMonth
      ? "transparent"
      : "none"};
  color: ${(props) =>
    props.isSelected ? "#fff" : props.isCurrentMonth ? "#333" : "#aaa"};
`;

const Header = styled.div`
  align-items: center;
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-evenly;
`;

const WeekDay = styled.div`
  width: calc(100% / 7);
  box-sizing: border-box;
  text-align: center;
  padding: 8px;
  font-weight: bold;
  color: #54626f;
`;

const H2Wrapper = styled.h2`
  margin: 0;
  color: #54626f;
`;

export default Calendar;
