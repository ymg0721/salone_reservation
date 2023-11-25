import React from "react";
import styled from "@emotion/styled";
import Footer from "../components/footer";
import { announcements } from "../data/announce";
import { menuItems } from "../data/menuItems";
import TitleImage from "../components/titleImage";
import HomeNotice from "../components/homeNotice";

const Home: React.FC = () => {
  return (
    <Wrapper>
      <TitleImage />
      <h2>お知らせ</h2>
      {announcements.map((announcement, index) => (
        <HomeNotice key={index} {...announcement} />
      ))}
      <Footer menuItems={menuItems} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: pink;
  height: 100vh;
`;

export default Home;
