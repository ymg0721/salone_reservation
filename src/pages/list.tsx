import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import HomeLink from "../components/homeLink";
import VerticalComponent from "../components/vertical";
import Footer from "../components/footer";
import { menuItems } from "../data/menuItems";
import { componentsData } from "../data/componentsData";

interface ListType {
  id: number;
  src: string;
  title: string;
  date: string;
}

const List: React.FC = () => {
  // パンくずリスト
  const multipleBreadcrumbs = [
    { label: "ホーム", to: "/home" },
    { label: "作品一覧画面", to: "/list" },
  ];
  const [data, setData] = useState<ListType[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/v1/list")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        console.log(json, "作品のDBに接続できました");
      });
  }, []);
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
      <div
        style={{
          overflowY: "auto",
          maxHeight: "500px",
          display: "flex",
          width: "100%",
          justifyContent: "spaceEvenly",
        }}
      >
        {data.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              marginBottom: "10vw",
              marginTop: "10vw",
              justifyContent: "space-evenly",
              flexDirection: "column",
            }}
          >
            <img
              src={item.src}
              alt=""
              style={{
                width: "10vw",
              }}
            />
            <h2>{item.title}</h2>
            <p>{item.date}</p>
          </div>
        ))}
      </div>
      <Footer menuItems={menuItems} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: rgb(247, 246, 245);
  height: 100vh;
`;

export default List;
