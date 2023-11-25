import React from "react";
import styled from "@emotion/styled";
import Footer from "../components/footer";
import { announcements } from "../data/announce";
import { menuItems } from "../data/menuItems";
import TitleImage from "../components/titleImage";
import HomeNotice from "../components/homeNotice";
import { motion } from "framer-motion";

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
  return (
    <Container>
      <Wrapper>
        <TitleImage />
        <NewsWrapper>
          <H2Wrapper>お知らせ</H2Wrapper>
          {announcements.map((announcement, index) => (
            <HomeNotice key={index} {...announcement} />
          ))}
        </NewsWrapper>
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
  height: 100vh;
`;

const NewsWrapper = styled.div`
  margin: 5vw;
`;

export default Home;
