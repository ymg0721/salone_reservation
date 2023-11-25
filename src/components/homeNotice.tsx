import React from "react";
import styled from "@emotion/styled";

interface AnnouncementProps {
  date: string;
  text: string;
  link: string;
}

const HomeNotice: React.FC<AnnouncementProps> = ({ date, text, link }) => {
  return (
    <HomeNoticeWrapper>
      <PStyled>{date} </PStyled>
      <AStyled href={link}>{text}</AStyled>
    </HomeNoticeWrapper>
  );
};

const HomeNoticeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const PStyled = styled.p`
  font-family: sans-serif;
`;

const AStyled = styled.a`
  font-family: sans-serif;
  color: #000000;
`;

export default HomeNotice;
