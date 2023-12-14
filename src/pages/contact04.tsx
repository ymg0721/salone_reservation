import React from "react";
import styled from "@emotion/styled";
import HomeLink from "../components/homeLink";
import { useLocation } from "react-router-dom";
import { Wrapper } from "../components/detailWrapper";

const Contact04: React.FC = () => {
  // パンくずリスト
  const multipleBreadcrumbs = [
    { label: "ホーム", to: "/home" },
    { label: "お問い合わせ管理画面", to: "/contact04" },
  ];

  const location = useLocation();
  const { email, message } = location.state || {};

  return (
    <Wrapper>
      <HomeLink items={multipleBreadcrumbs} />
      <WrapperStyled>
        <text>{email}</text>
        <text>{message}</text>
      </WrapperStyled>
    </Wrapper>
  );
};

const WrapperStyled = styled.div`
  overflow-y: auto;
  max-height: 500px;
  margin: 20px 10vw;
`;

export default Contact04;
