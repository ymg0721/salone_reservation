import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import HomeLink from "../components/homeLink";
import ContactImage from "../components/contactImage";
import { Wrapper, DetailWrapper } from "../components/detailWrapper";
import Header from "../components/header";
import FooterMenu from "../components/footer";
import { menuItems } from "../data/menuItems";

const Contact01: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Change the route in your Axios request
  const handleSubmit = async () => {
    if (email === "" && message === "") {
      alert("メールアドレスと\nお問い合わせ内容を入力してください。");
    } else if (email === "") {
      alert("メールアドレスを入力してください。");
    } else if (message === "") {
      alert("お問い合わせ内容を入力してください。");
    } else {
      navigate("/contact02", { state: { email, message } });
    }
  };
  // パンくずリスト
  const multipleBreadcrumbs = [
    { label: "ホーム", to: "/home" },
    { label: "お問い合わせ", to: "/contact" },
  ];

  return (
    <Wrapper>
      <Header />
      <ContactImage />
      <DetailWrapper>
        <TestWrpapper>
          <HomeLink items={multipleBreadcrumbs} />
          <WrapperStyled>
            <h1 style={{ fontSize: "4vw" }}>
              なんでもお気軽に
              <br />
              ご相談・お問い合わせください！
            </h1>
            <WrapperStyled02>
              <h2 style={{ fontSize: "4vw" }}>ご自身のメールアドレス</h2>
              <InputWrapper
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <h2 style={{ fontSize: "4vw" }}>お問い合わせ内容</h2>
              <TextareaWrapper
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <br />
              <br />
              <ButtonStyled onClick={handleSubmit}>送信</ButtonStyled>
            </WrapperStyled02>
          </WrapperStyled>
        </TestWrpapper>
      </DetailWrapper>
      <FooterMenu menuItems={menuItems} />
    </Wrapper>
  );
};

const WrapperStyled = styled.div`
  margin: 2vw 10vw;
`;

const WrapperStyled02 = styled.div`
  margin: 5vw auto;
  width: 100%;
  text-align: left;
`;

const InputWrapper = styled.textarea`
  border-color: snow;
  margin: 0 4vw;
  height: 4vw;
  width: 50vw;
`;

const TextareaWrapper = styled.textarea`
  border-color: snow;
  margin: 0 4vw;
  height: 8vw;
  width: 50vw;
`;

const TestWrpapper = styled.div`
  margin: 40vw 8vw 0 8vw;
  padding-bottom: 4vw;
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
  width: 250px;
  height: 40px;
  color: #fff;
  background-color: #3b2f2f;
  border-radius: 20px;
`;

export default Contact01;
