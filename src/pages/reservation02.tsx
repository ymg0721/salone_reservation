import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import HomeLink from "../components/homeLink";
import ReservationImage from "../components/reservationImage";
import { Wrapper, DetailWrapper } from "../components/detailWrapper";

const Reservation: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  // パンくずリスト
  const multipleBreadcrumbs = [
    { label: "ホーム", to: "/home" },
    { label: "ご予約画面➀", to: "/reservation01" },
    { label: "ご予約画面➁", to: "/reservation02" },
  ];

  const handleSubmit = async () => {
    if (name === "" && email === "" && phone === "") {
      alert("入力していない箇所があります");
    } else if (name === "") {
      alert("入力していない箇所があります");
    } else if (email === "") {
      alert("入力していない箇所があります");
    } else if (phone === "") {
      alert("入力していない箇所があります");
    } else {
      navigate("/reservation03", { state: { name, email, phone } });
    }
  };

  return (
    <Wrapper>
      <ReservationImage />
      <DetailWrapper>
        <ScrollChildrenWrpapper>
          <HomeLink items={multipleBreadcrumbs} />
          <WrapperStyled>
            <h1 style={{ fontSize: "5vw" }}>
              お客様のご連絡先を
              <br />
              入力してください！
            </h1>
            <h2 style={{ fontSize: "4vw" }}>ご自身のお名前</h2>
            <InputStyled
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <h2 style={{ fontSize: "4vw" }}>ご自身のメールアドレス</h2>
            <InputStyled
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h2 style={{ fontSize: "4vw" }}>ご自身のお電話番号</h2>
            <InputStyled
              type="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <br /> <br />
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
`;

const InputStyled = styled.input`
  border-color: snow;
  height: 5vw;
  width: 50vw;
`;

const ScrollChildrenWrpapper = styled.div`
  margin: 140vw 8vw 40vw 8vw;
  height: 70%;
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

export default Reservation;
