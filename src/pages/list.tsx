import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import axios from "axios";
import HomeLink from "../components/homeLink";
import VerticalComponent from "../components/vertical";
import Footer from "../components/footer";
import { menuItems } from "../data/menuItems";
import { componentsData } from "../data/componentsData";

interface ListType {
  id: number;
  src?: string;
  title?: string;
  date?: string;
  text?: string;
}

const List: React.FC = () => {
  // パンくずリスト
  const multipleBreadcrumbs = [
    { label: "ホーム", to: "/home" },
    { label: "作品一覧画面", to: "/list" },
  ];
  // 作品一覧画面全データ
  const [data, setData] = useState<ListType[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3001/api/v1/list")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        console.log(json, "作品のDBに接続できました");
      });
  }, []);

  // 二個ずつで改行する処理
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

  const handleEvent = (item: ListType) => {
    navigate("/list/detail", {
      state: {
        id: item.id,
        src: item.src,
        title: item.title,
        date: item.date,
        text: item.text,
      },
    });
  };

  return (
    <Wrapper>
      <HomeLink items={multipleBreadcrumbs} />
      <ListWrapper>
        {data.map((item) => (
          <DataWrapper key={item.id}>
            <img
              src={item.src}
              alt=""
              style={{
                width: "10vw",
              }}
            />
            <h2>{item.title}</h2>
            <p>{item.date}</p>
            <text style={{ display: "none" }}>{item.text}</text>
            <button onClick={() => handleEvent(item)}>詳細画面へ</button>
          </DataWrapper>
        ))}
      </ListWrapper>
      <Footer menuItems={menuItems} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: rgb(247, 246, 245);
  height: 100%;
`;

const DataWrapper = styled.div`
  display: flex;
  margin-bottom: 10vw;
  margin-top: 10vw;
  justify-content: space-around;
  flex-direction: column;
`;

const ListWrapper = styled.div`
  overflow-y: auto;
  max-height: 500px;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

export default List;
