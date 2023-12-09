import React from "react";
import styled from "@emotion/styled";
import { announcements } from "../data/announce";
import TitleImage from "../components/titleImage";
import HomeNotice from "../components/homeNotice";

const fadeInAnimation = `
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Container = styled.div`
  animation: fadeIn 1s ease-in-out;
  ${fadeInAnimation}
`;

const Home: React.FC = () => {
  // const titleImageId = document.getElementById("a");
  // const footerId = document.getElementById("footer");
  // const aY = titleImageId?.offsetHeight || 0;
  // const footerY = footerId?.offsetHeight || 0;

  return (
    <Container>
      <Wrapper>
        <TitleImage />
        <NewsWrapper01>
          <NewsWrapper02>
            <H2Wrapper>お知らせ</H2Wrapper>
            {announcements.map((announcement, index) => (
              <HomeNotice key={index} {...announcement} />
            ))}
          </NewsWrapper02>
        </NewsWrapper01>
      </Wrapper>
    </Container>
  );
};

const H2Wrapper = styled.h3`
  font-family: var(--s-font-3e9e7a4c);
`;

const Wrapper = styled.div`
  background: #f7f6f5;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  min-height: 100vh;
`;

const NewsWrapper01 = styled.div`
  height: 100%;
  width: -webkit-fill-available;
  position: absolute;
  overflow: hidden;
  overflow-y: scroll;
`;

const NewsWrapper02 = styled.div`
  margin: 70vw 5vw 5vw 5vw;
  height: 1000px;
  width: -webkit-fill-available;
  backdrop-filter: blur(100px);
  opacity: 0.75;
  border-radius: 24px;
`;

export default Home;
