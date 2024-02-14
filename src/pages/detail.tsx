import React from "react";
import styled from "@emotion/styled";
import HomeLink from "../components/homeLink";
import { useLocation } from "react-router-dom";
import DetailImage from "../components/detailImage";
import Header from "../components/header";
import FooterMenu from "../components/footer";
import { menuItems } from "../data/menuItems";

const Detail: React.FC = () => {
  // パンくずリスト
  const multipleBreadcrumbs = [
    { label: "ホーム", to: "/home" },
    { label: "作品一覧画面", to: "/list" },
    { label: "作品詳細画面", to: "/list/detail" },
  ];
  const location = useLocation();
  const { state } = location;

  // stateから必要なデータを取り出す
  const { src, title, date } = state;
  return (
    <Wrapper>
      <Header />
      <DetailImage />
      <DetailWrapperStyled>
        <TestWrpapper>
          <HomeLink items={multipleBreadcrumbs} />
          {/* ↓コンポーネント化予定 */}
          <ImgStyled src={src} alt="" />
          <H3Wrapper>{date}</H3Wrapper>
          <H2Wrapper>{title}</H2Wrapper>
          <h3 style={{ marginLeft: "10vw" }}>この作品を</h3>
          <button style={{ margin: "0 0 5vw 10vw" }}>
            <GoogleColor
              href="https://forms.gle/xv72LoY81wP1VWiH9"
              style={{
                color: "#F7F7F7",
                textDecoration: "none",
              }}
            >
              Googleで予約する
            </GoogleColor>
          </button>
          <InstagrmButton>
            <a
              href="https://www.instagram.com/venere_emi/"
              style={{ color: "white" }}
            >
              Instagramで予約・お問い合わせ
            </a>
          </InstagrmButton>
          <button style={{ margin: "0 0 5vw 10vw" }}>
            <a href="/reservation01/">このHPで予約する。</a>
          </button>
          {/* <CardBackground>
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
          </CardBackground> */}
        </TestWrpapper>
      </DetailWrapperStyled>
      <FooterMenu menuItems={menuItems} />
    </Wrapper>
  );
};

const GoogleColor = styled.a`
  background: linear-gradient(#4285f4, #0f9d58, #f4b400, #db4437);
  textdecoration: none;
`;

const InstagrmButton = styled.button`
  margin: 0 0 5vw 10vw;
  background: linear-gradient(#4c64d3, #cf2e92, #f26939, #ffdd83);
`;

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

const ImgStyled = styled.img`
  display: block;
  margin: 15vw auto 3vw;
  max-height: 50vw;
  max-width: 50vw;
  border: 5vw solid rgb(253, 253, 253);
  box-shadow: 0 5vw 0 #eeeeee;
  border-radius: 1.5vw;
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
  margin: 40vw 8vw 40vw 8vw;
  height: 100%;
  width: -webkit-fill-available;
  -webkit-backdrop-filter: blur(70px);
  backdrop-filter: blur(70px);
  border-radius: 24px;
`;
export default Detail;
