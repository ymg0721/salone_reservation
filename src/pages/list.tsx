import React from "react";
import styled from "@emotion/styled";
import HomeLink from "../components/homeLink";
import VerticalComponent from "../components/vertical";
import Footer from "../components/footer";
import { menuItems } from "../data/menuItems";
import { componentsData } from "../data/componentsData";

const List: React.FC = () => {
  // パンくずリスト
  const multipleBreadcrumbs = [
    { label: "ホーム", to: "/home" },
    { label: "作品一覧画面", to: "/list" },
  ];

  const renderComponents = () => {
    const rows: JSX.Element[][] = [];
    for (let i = 0; i < componentsData.length; i += 2) {
      const rowComponents = componentsData.slice(i, i + 2);
      const row = rowComponents.map((data, index) => (
        <VerticalComponent key={index} {...data} />
      ));
      rows.push(row);
    }

    return rows;
  };

  return (
    <Wrapper>
      <HomeLink items={multipleBreadcrumbs} />
      <div style={{ overflowY: "auto", maxHeight: "500px" }}>
        {renderComponents().map((row, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              marginBottom: "10vw",
              marginTop: "10vw",
              justifyContent: "space-evenly",
            }}
          >
            {row}
          </div>
        ))}
      </div>
      <Footer menuItems={menuItems} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: pink;
  height: 100vh;
`;

export default List;
