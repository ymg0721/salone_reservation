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
  padding: 0vw 4vw 4vw 6vw;
  font-size: 4vw;
  color: white;
`;

const AStyled = styled.a`
  padding: 4vw 8vw 4vw 4vw;
  font-size: 4vw;
  color: white;
}
`;

export default HomeNotice;
