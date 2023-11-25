import React from "react";
import styled from "@emotion/styled";
import HomeLink from "../components/homeLink";
import Footer from "../components/footer";
import { menuItems } from "../data/menuItems";

const Detail: React.FC = () => {
  // パンくずリスト
  const multipleBreadcrumbs = [
    { label: "ホーム", to: "/home" },
    { label: "作品一覧画面", to: "/list" },
    { label: "作品詳細画面", to: "/list/detail" },
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

export default Detail;
