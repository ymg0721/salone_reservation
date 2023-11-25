import React from "react";
import styled from "@emotion/styled";
import HomeLink from "../components/homeLink";
import Footer from "../components/footer";
import { menuItems } from "data/menuItems";

const Contact: React.FC = () => {
  // パンくずリスト
  const multipleBreadcrumbs = [
    { label: "ホーム", to: "/" },
    { label: "お問い合わせ", to: "/contact" },
  ];

  return (
    <Wrapper>
      <HomeLink items={multipleBreadcrumbs} />
      <Footer menuItems={menuItems} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: pink;
  height: 100vh;
`;

export default Contact;
