import React from "react";
import styled from "@emotion/styled";
import HomeLink from "../components/homeLink";
import VerticalComponent from "../components/vertical";
import { menuItems } from "../data/menuItems";
import { componentsData } from "../data/componentsData";
import Footer from "../components/footer";

const List: React.FC = () => {
  // パンくずリスト
  const multipleBreadcrumbs = [
    { label: "ホーム", to: "/home" },
    { label: "作品一覧画面", to: "/list" },
  ];

  return (
    <Wrapper>
      <HomeLink items={multipleBreadcrumbs} />
      {componentsData.map((data, index) => (
        <VerticalComponent key={index} {...data} />
      ))}
      <Footer menuItems={menuItems} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: pink;
  height: 100vh;
`;

export default List;
