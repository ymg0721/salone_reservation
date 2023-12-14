import React from "react";
import styled from "@emotion/styled";
// import HomeLink from "../components/homeLink";
import ContactImage from "../components/contactImage";
import { Wrapper, DetailWrapper } from "../components/detailWrapper";

const Contact03: React.FC = () => {
  // パンくずリスト
  // const multipleBreadcrumbs = [
  //   { label: "ホーム", to: "/home" },
  //   { label: "お問い合わせ➀", to: "/contact01" },
  //   { label: "お問い合わせ➁", to: "/contact02" },
  //   { label: "お問い合わせ➂", to: "/contact03" },
  // ];

  return (
    <Wrapper>
      <ContactImage />
      <DetailWrapper>
        <ScrollChildrenWrpapper>
          <WrapperStyled>
            <h1>お問い合わせありがとうございます！！</h1>
            <h2>お問い合わせから約1日で返信させていただきます！！</h2>
            <a href="/home">ホームへ戻る</a>
          </WrapperStyled>
        </ScrollChildrenWrpapper>
      </DetailWrapper>
    </Wrapper>
  );
};

const WrapperStyled = styled.div`
  overflow-y: auto;
  max-height: 500px;
  margin: 20px 10vw;
`;

const ScrollChildrenWrpapper = styled.div`
  margin: 50vw 8vw 5vw 8vw;
  height: 1000px;
  width: -webkit-fill-available;
  -webkit-backdrop-filter: blur(70px);
  backdrop-filter: blur(70px);
  border-radius: 24px;
`;

export default Contact03;
