import React from "react";
import styled from "@emotion/styled";
import axios from "axios";
import HomeLink from "../components/homeLink";
import { useLocation, useNavigate } from "react-router-dom";
import ContactImage from "../components/contactImage";
import { Wrapper, DetailWrapper } from "../components/detailWrapper";

const Contact02: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { email, message } = location.state || {};

  const handleSubmit = async () => {
    try {
      await axios.post(
        "http://localhost:3001/api/v1/contact02",
        {
          email,
          message,
        },
        { withCredentials: true }
      );
      navigate("/contact03", { state: { email, message } });
      console.log("バック3に内容が送信されました。");
    } catch (err) {
      console.error("送信に失敗", err);
    }
  };

  // パンくずリスト
  const multipleBreadcrumbs = [
    { label: "ホーム", to: "/home" },
    { label: "お問い合わせ➀", to: "/contact01" },
    { label: "お問い合わせ➁", to: "/contact02" },
  ];

  return (
    <Wrapper>
      <ContactImage />
      <DetailWrapper>
        <ScrollChildrenWrpapper>
          <HomeLink items={multipleBreadcrumbs} />
          <WrapperStyled>
            <h1 style={{ fontSize: "4vw" }}>お問い合わせ内容確認</h1>
            <h2 style={{ fontSize: "4vw" }}>ご自身のメールアドレス</h2>
            <PWrapper>{email}</PWrapper>
            <h2 style={{ fontSize: "4vw" }}>お問い合わせ内容</h2>
            <PWrapper>{message}</PWrapper>
            <ButtonStyled onClick={handleSubmit}>送信</ButtonStyled>
          </WrapperStyled>
        </ScrollChildrenWrpapper>
      </DetailWrapper>
    </Wrapper>
  );
};

const WrapperStyled = styled.div`
  overflow-y: auto;
  margin: 20px 10vw;
  padding-bottom: 5vw;
`;

const PWrapper = styled.p`
  text-decoration: underline;
  color: #fdfdfd;
  font-size: 4.5vw;
  margin-top: 0;
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

const ScrollChildrenWrpapper = styled.div`
  margin: 140vw 8vw 40vw 8vw;
  width: -webkit-fill-available;
  -webkit-backdrop-filter: blur(70px);
  backdrop-filter: blur(70px);
  border-radius: 24px;
`;

export default Contact02;
