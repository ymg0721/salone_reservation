import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "@emotion/styled";
import HomeLink from "../components/homeLink";

const Reservation: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // const location = useLocation();
  const navigate = useNavigate();
  // const { state } = location;
  // const { src, title, date, text } = state;
  // パンくずリスト
  const multipleBreadcrumbs = [
    { label: "ホーム", to: "/home" },
    { label: "ご予約画面➀", to: "/reservation01" },
    { label: "ご予約画面➁", to: "/reservation02" },
  ];

  const handleSubmit = async () => {
    try {
      await axios.post(
        "http://localhost:3001/api/v1/reservation02",
        {
          name,
          email,
          phone,
        },
        { withCredentials: true }
      );
      navigate("/reservation03", { state: { name, email, phone } });
      console.log("バックに内容が送信されました。");
    } catch (err) {
      console.error("送信に失敗", err);
    }
  };

  return (
    <Wrapper>
      <HomeLink items={multipleBreadcrumbs} />
      <WrapperStyled>
        <h1>
          お客様のご連絡先を
          <br />
          入力してください！
        </h1>
        <h2>ご自身のお名前</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h2>ご自身のメールアドレス</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h2>ご自身のお電話番号</h2>
        <input
          type="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br /> <br />
        <button type="button" onClick={handleSubmit}>
          確定画面へ➡
        </button>
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

export default Reservation;
