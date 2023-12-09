import React from "react";
import styled from "@emotion/styled";
import axios from "axios";
import HomeLink from "../components/homeLink";
import { useLocation, useNavigate } from "react-router-dom";

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
      <HomeLink items={multipleBreadcrumbs} />
      <WrapperStyled>
        <h1>お問い合わせ内容確認</h1>
        <h2>ご自身のメールアドレス</h2>
        <PWrapper>{email}</PWrapper>
        <h2>お問い合わせ内容</h2>
        <PWrapper>{message}</PWrapper>
        <br />
        <br />
        <button onClick={handleSubmit}>送信</button>
      </WrapperStyled>
    </Wrapper>
  );
};

const WrapperStyled = styled.div`
  overflow-y: auto;
  max-height: 500px;
  margin: 20px 10vw;
`;

const Wrapper = styled.div`
  background: rgb(247, 246, 245);
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  min-height: 100vh;
`;

const PWrapper = styled.p`
  text-decoration: underline;
`;

export default Contact02;
