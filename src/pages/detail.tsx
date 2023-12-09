import React from "react";
import styled from "@emotion/styled";
import HomeLink from "../components/homeLink";
import { useLocation, useNavigate } from "react-router-dom";
import Img2 from "../img/flower.svg";

const Detail: React.FC = () => {
  // パンくずリスト
  const multipleBreadcrumbs = [
    { label: "ホーム", to: "/home" },
    { label: "作品一覧画面", to: "/list" },
    { label: "作品詳細画面", to: "/list/detail" },
  ];
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  // stateから必要なデータを取り出す
  const { src, title, date, text } = state;
  const handleEvent = () => {
    navigate("/reservation01", {});
  };
  return (
    <Wrapper>
      <HomeLink items={multipleBreadcrumbs} />
      {/* ↓コンポーネント化予定 */}
      <ImgStyled src={src} alt="" />
      <H3Wrapper>{date}</H3Wrapper>
      <H2Wrapper>{title}</H2Wrapper>
      <CardBackground>
        <ImgWrapper>
          <ImgStyled2 src={Img2} alt="" />
          <p>この作品への想い。</p>
          <StyledInput
            type="button"
            value="レッスンを申し込む"
            onClick={handleEvent}
          />
        </ImgWrapper>
        <PStyled>{text}</PStyled>
      </CardBackground>
    </Wrapper>
  );
};

const H2Wrapper = styled.h2`
  margin: 1vw 10vw;
`;

const H3Wrapper = styled.h3`
  margin: 1vw 10vw;
`;

const StyledInput = styled.input`
  background: none;
  border: none;
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
  margin: 3vw 10vw 0;
`;

const Wrapper = styled.div`
  background: rgb(247, 246, 245);
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  padding-top: 20vw;
`;

export default Detail;
