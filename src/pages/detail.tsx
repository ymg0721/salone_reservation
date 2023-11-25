import React from "react";
import styled from "@emotion/styled";
import HomeLink from "../components/homeLink";
import Footer from "../components/footer";
import Img from "../img/footer01.png";
import Img2 from "../img/flower.svg";
import { menuItems } from "../data/menuItems";

const Detail: React.FC = () => {
  // パンくずリスト
  const multipleBreadcrumbs = [
    { label: "ホーム", to: "/home" },
    { label: "作品一覧画面", to: "/list" },
    { label: "作品詳細画面", to: "/list/detail" },
  ];

  return (
    <Wrapper>
      <HomeLink items={multipleBreadcrumbs} />
      {/* ↓コンポーネント化予定 */}
      <ImgStyled src={Img} alt="" />
      <CardBackground>
        <ImgWrapper>
          <ImgStyled2 src={Img2} alt="" />
          <p>この作品への想い。</p>
          <StyledInput type="button" value="レッスンを申し込む" />
        </ImgWrapper>
        <PStyled>
          あああああああああああああああああああああああああああああああああああああああ
        </PStyled>
      </CardBackground>
      <Footer menuItems={menuItems} />
    </Wrapper>
  );
};

const StyledInput = styled.input`
  background: none;
  border: none;
  font-family: serif;
  color: #555;
  text-decoration: underline;
  cursor: pointer;
  font-size: 4vw;

  &:focus {
    outline: none;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PStyled = styled.p`
  margin-block-start: 0em;
  padding: 0 20px 20px 20px;
  word-wrap: break-word;
  white-space: pre-wrap;
  text-decoration: underline;
`;

const ImgStyled = styled.img`
  display: block;
  margin: 30px auto;
  max-width: 100%;
  height: auto;
`;

const ImgStyled2 = styled.img`
  display: block;
  margin: 10px;
  max-width: 100%;
  height: auto;
`;

const CardBackground = styled.div`
  background-color: gray;
  height: auto;
  margin: 20px 10vw 0;
`;

const Wrapper = styled.div`
  background: pink;
  height: 100vh;
`;

export default Detail;
