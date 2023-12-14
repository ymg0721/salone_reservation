import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import HomeLink from "../components/homeLink";
import VerticalComponent from "../components/vertical";
import { componentsData } from "../data/componentsData";
import ListImage from "../components/listImage";
import DetailWrapper from "../components/detailWrapper";

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
      <ListImage />
      <DetailWrapper>
        <TestWrpapper>
          <HomeLink items={multipleBreadcrumbs} />
          <ListWrapper>
            {data.map((item, index) => (
              <React.Fragment key={item.id}>
                <DataWrapper>
                  <ImgWrapper src={item.src} alt="" />
                  <h2>{item.title}</h2>
                  <p>{item.date}</p>
                  <TextWrapper>{item.text}</TextWrapper>
                  <button onClick={() => handleEvent(item)}>詳細画面へ</button>
                </DataWrapper>
                {/* データが偶数かつ最後のアイテムでない場合、改行を追加 */}
                {index % 2 === 1 && index !== data.length - 1 && <br />}
              </React.Fragment>
            ))}
          </ListWrapper>
        </TestWrpapper>
      </DetailWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  backdrop-filter: blur(70px);
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  min-height: 100vh;
`;

const DataWrapper = styled.div`
  display: flex;
  margin-bottom: 10vw;
  margin-top: 10vw;
  justify-content: space-around;
  flex-direction: column;
  width: 48%;
`;

const ListWrapper = styled.div`
  overflow-y: auto;
  max-height: 500px;
  display: flex;
  flex-wrap: wrap; /* 改行を有効にする */
  width: 100%;
  justify-content: space-evenly;
`;

const ImgWrapper = styled.img`
  width: 10vw;
`;

const TextWrapper = styled.p`
  display: none;
`;

const TestWrpapper = styled.div`
  margin: 140vw 8vw 5vw 8vw;
  height: 1000px;
  width: -webkit-fill-available;
  -webkit-backdrop-filter: blur(70px);
  backdrop-filter: blur(70px);
  opacity: 0.75;
  border-radius: 24px;
`;
export default List;
