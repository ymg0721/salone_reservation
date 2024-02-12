import React from "react";
import styled from "@emotion/styled";
// import HomeLink from "../components/homeLink";
import ContactImage from "../components/contactImage";
import { Wrapper, DetailWrapper } from "../components/detailWrapper";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import FooterMenu from "../components/footer";
import { menuItems } from "../data/menuItems";

const Contact03: React.FC = () => {
  const navigate = useNavigate();
  const handleSubmit = async () => {
    navigate("/home");
  };

  return (
    <Wrapper>
      <Header />
      <ContactImage />
      <DetailWrapper>
        <ScrollChildrenWrpapper>
          <WrapperStyled>
            <h1 style={{ fontSize: "5vw" }}>
              お問い合わせありがとうございます！！
            </h1>
            <h2 style={{ fontSize: "4vw" }}>
              お問い合わせから約1日で返信させていただきます！！
            </h2>
            <br />
            <ButtonStyled onClick={handleSubmit}>ホームへ戻る</ButtonStyled>
          </WrapperStyled>
        </ScrollChildrenWrpapper>
      </DetailWrapper>
      <FooterMenu menuItems={menuItems} />
    </Wrapper>
  );
};

const WrapperStyled = styled.div`
  overflow-y: auto;
  max-height: 500px;
  margin: 20px 10vw;
`;

const ScrollChildrenWrpapper = styled.div`
  margin: 50vw 8vw 40vw 8vw;
  height: 35%;
  width: -webkit-fill-available;
  -webkit-backdrop-filter: blur(70px);
  backdrop-filter: blur(70px);
  border-radius: 24px;
`;

const ButtonStyled = styled.button`
  transition: 0.2s ease-in-out;
  text-align: center;
  display: inline-block;
  border: none;
  width: 60vw;
  height: 40px;
  color: #fff;
  background-color: #3b2f2f;
  border-radius: 20px;
`;

export default Contact03;
