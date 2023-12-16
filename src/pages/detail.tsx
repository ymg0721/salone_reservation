import React from "react";
import styled from "@emotion/styled";
import HomeLink from "../components/homeLink";
import { useLocation, useNavigate } from "react-router-dom";
import Img2 from "../img/flower.svg";
import DetailImage from "../components/detailImage";

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
      <DetailImage />
      <DetailWrapperStyled>
        <TestWrpapper>
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
        </TestWrpapper>
      </DetailWrapperStyled>
    </Wrapper>
  );
};

const DetailWrapperStyled = styled.div`
  height: 100%;
  width: -webkit-fill-available;
  position: absolute;
  overflow: hidden;
  overflow-y: auto;
`;

const H2Wrapper = styled.h2`
  margin: 1vw 10vw;
  color: #fdfdfd;
  text-decoration: underline;
`;

const H3Wrapper = styled.p`
  margin: 9vw 10vw 0vw;
  color: #f7f7f7;
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
  margin: 15vw auto 3vw;
  max-height: 50vw;
  max-width: 50vw;
  border: 5vw solid rgb(253, 253, 253);
  box-shadow: 0 5vw 0 #eeeeee;
  border-radius: 1.5vw;
`;

const ImgStyled2 = styled.img`
  display: block;
  margin: 10px;
  max-width: 100%;
`;

const CardBackground = styled.div`
  border: 5px solid #e7e7e7;
  background-color: #ffffff;
  border-radius: 1vw;
  overflow-x: auto; // 横スクロールを有効にする
  white-space: nowrap; // 要素を横に並べるために必要
  display: flex; // 要素を横に並べる

  // 以下は必要に応じて調整
  // gap: 20px; // 要素間の間隔を調整
  margin: 3vw 10vw 0;
  flex-direction: column;
`;

const Wrapper = styled.div`
  background: rgb(247, 246, 245);
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  width: -webkit-fill-available;
  position: absolute;
`;

const TestWrpapper = styled.div`
  margin: 140vw 8vw 40vw 8vw;
  height: 100%;
  width: -webkit-fill-available;
  -webkit-backdrop-filter: blur(70px);
  backdrop-filter: blur(70px);
  border-radius: 24px;
`;
export default Detail;
