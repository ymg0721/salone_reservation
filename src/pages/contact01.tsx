import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "@emotion/styled";
import HomeLink from "../components/homeLink";
import Footer from "../components/footer";
import { menuItems } from "../data/menuItems";

const Contact01: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Change the route in your Axios request
  const handleSubmit = async () => {
    try {
      await axios.post(
        "http://localhost:3001/api/v1/contact01",
        {
          email,
          message,
        },
        { withCredentials: true }
      );
      navigate("/contact02", { state: { email, message } });
      console.log("バックに内容が送信されました。");
    } catch (err) {
      console.error("送信に失敗", err);
    }
  };
  // パンくずリスト
  const multipleBreadcrumbs = [
    { label: "ホーム", to: "/home" },
    { label: "お問い合わせ", to: "/contact" },
  ];

  return (
    <Wrapper>
      <HomeLink items={multipleBreadcrumbs} />
      <WrapperStyled>
        <H1Wrapper>
          なんでもお気軽に
          <br />
          ご相談・お問い合わせください！
        </H1Wrapper>
        <H2Wrapper>ご自身のメールアドレス</H2Wrapper>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h2>お問い合わせ内容</h2>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <br />
        <button onClick={handleSubmit}>送信</button>
      </WrapperStyled>
      <Footer menuItems={menuItems} />
    </Wrapper>
  );
};

const H1Wrapper = styled.h1`
  font-family: var(--s-font-3e9e7a4c);
`;

const H2Wrapper = styled.h2`
  font-family: var(--s-font-3e9e7a4c);
`;

const WrapperStyled = styled.div`
  overflowy: auto;
  max-height: 500px;
  margin: 20px 10vw;
`;

const Wrapper = styled.div`
  background: rgb(247, 246, 245);
  height: 100%;
`;

export default Contact01;
