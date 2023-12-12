import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "@emotion/styled";
import HomeLink from "../components/homeLink";
import ContactImage from "../components/contactImage";

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

      if (email === "" && message === "") {
        alert("メールアドレスと\nお問い合わせ内容を入力してください。");
      } else if (email === "") {
        alert("メールアドレスを入力してください。");
      } else if (message === "") {
        alert("お問い合わせ内容を入力してください。");
      } else {
        navigate("/contact02", { state: { email, message } });
      }
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
      <ContactImage />
      <div
        style={{
          position: "absolute",
          backdropFilter: "blur(70px)",
          width: "-webkit-fill-available",
          marginTop: "30vw",
          marginLeft: "10vw",
          marginRight: "10vw",
        }}
      >
        <HomeLink items={multipleBreadcrumbs} />
        <WrapperStyled>
          <h1>
            なんでもお気軽に
            <br />
            ご相談・お問い合わせください！
          </h1>
          <WrapperStyled02>
            <h2>ご自身のメールアドレス</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                height: "2vw",
                width: "35vw",
              }}
            />
            <h2>お問い合わせ内容</h2>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{
                height: "4vw",
                width: "35vw",
              }}
            />
            <br />
            <br />
            <button onClick={handleSubmit}>送信</button>
          </WrapperStyled02>
        </WrapperStyled>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: rgb(247, 246, 245);
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  min-height: 100vh;
`;

const WrapperStyled = styled.div`
  overflow-y: auto;
  margin: 2vw 10vw;
`;

const WrapperStyled02 = styled.div`
  margin: 5vw auto;
  width: 100%;
  text-align: left;
`;

export default Contact01;
