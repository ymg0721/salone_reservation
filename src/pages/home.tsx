import React from "react";
import styled from "@emotion/styled";
import Footer from "../components/footer";
import Footer01 from "../img/footer01.png";
import Footer02 from "../img/footer02.png";
import Footer03 from "../img/footer03.png";
import Footer04 from "../img/footer04.png";
import TitleImage from "../components/titleImage";

const Home: React.FC = () => {
  const menuItems = [
    {
      label: "作品",
      link: "/",
      img: Footer01,
    },
    {
      label: "instagram",
      link: "https://www.instagram.com/venere_emi/",
      img: Footer02,
    },
    { label: "ご予約", link: "/reservation", img: Footer03 },
    { label: "お問い合わせ", link: "/contact", img: Footer04 },
  ];
  return (
    <Wrapper>
      <TitleImage />
      <Footer menuItems={menuItems} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: pink;
  height: 100vh;
`;

export default Home;
