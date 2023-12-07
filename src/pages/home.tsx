import React from "react";
import styled from "@emotion/styled";
import Footer from "../components/footer";
import { announcements } from "../data/announce";
import { menuItems } from "../data/menuItems";
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
  const titleImageId = document.getElementById("titleImage");
  const titleImageY = titleImageId?.offsetHeight || 0;

  return (
    <Container>
      <Wrapper>
        <TitleImage />
        <div
          style={{
            height: `${titleImageY}px`,
            width: "-webkit-fill-available",
            position: "absolute",
            overflow: "hidden",
            overflowY: "scroll",
          }}
        >
          <NewsWrapper>
            <H2Wrapper>お知らせ</H2Wrapper>
            {announcements.map((announcement, index) => (
              <HomeNotice key={index} {...announcement} />
            ))}
          </NewsWrapper>
        </div>
        <Footer menuItems={menuItems} />
      </Wrapper>
    </Container>
  );
};

const H2Wrapper = styled.h3`
  font-family: var(--s-font-3e9e7a4c);
`;

const Wrapper = styled.div`
  background: #f7f6f5;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  min-height: 100vh;
`;

const NewsWrapper = styled.div`
  margin: 80vw 5vw 5vw 5vw;
  height: 1000px;
  width: -webkit-fill-available;
  background: antiquewhite;
  opacity: 0.75;
  border-radius: 24px;
`;

export default Home;
