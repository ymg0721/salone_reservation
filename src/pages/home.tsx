import React from "react";
import styled from "@emotion/styled";
import Footer from "../components/footer";
import { announcements } from "../data/announce";
import { menuItems } from "../data/menuItems";
import TitleImage from "../components/titleImage";
import HomeNotice from "../components/homeNotice";
import LogoTitle from "../img/logo.png";

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
  const titleImageId = document.getElementById("a");
  const footerId = document.getElementById("footer");
  const aY = titleImageId?.offsetHeight || 0;
  const footerY = footerId?.offsetHeight || 0;

  return (
    <Container>
      <Wrapper>
        <TitleImage />
        <header
          style={{
            width: "-webkit-fill-available",
            position: "absolute",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            zIndex: "1",
          }}
        >
          <h1 style={{ color: "white" }}>Venere Emi Flower Salone</h1>
          <img src={LogoTitle} alt="" style={{ width: "30%" }} />
        </header>
        <div
          style={{
            height: `100%`,
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
        <a
          href="/home"
          style={{
            backgroundColor: "#1cb4d3",
            bottom: `162px`,
            color: "#fff",
            padding: "20px",
            position: "fixed",
            right: "0",
          }}
          id="a"
        >
          ホームへ戻る
        </a>
        <a
          href="/reservation01"
          style={{
            backgroundColor: "#1cb4d3",
            bottom: `98px`,
            color: "#fff",
            padding: "20px",
            position: "fixed",
            right: "0",
          }}
          id="a"
        >
          レッスンのご予約
        </a>

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
  height: ${window.innerHeight}px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  min-height: 100vh;
`;

const NewsWrapper = styled.div`
  margin: 70vw 5vw 5vw 5vw;
  height: 1000px;
  width: -webkit-fill-available;
  backdrop-filter: blur(100px);
  opacity: 0.75;
  border-radius: 24px;
`;

export default Home;
