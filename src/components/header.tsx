import React from "react";
import styled from "@emotion/styled";
import LogoTitle from "../img/logo.png";

// フッターメニューコンポーネント
const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <H1Wrapper></H1Wrapper>
      <a href="/home" style={{ textDecoration: "none" }}>
        <ImgWrapper src={LogoTitle} alt="" />
      </a>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  width: -webkit-fill-available;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  backdrop-filter: blur(10px);
`;

const H1Wrapper = styled.h1`
  color: white;
  margin: 0;
  padding: 0 5vw 0;
  font-size: 5vw;
`;

const ImgWrapper = styled.img`
  width: 50vw;
`;

export default Header;
