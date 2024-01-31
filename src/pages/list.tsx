import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import HomeLink from "../components/homeLink";
import ListImage from "../components/listImage";
import { DetailWrapper } from "../components/detailWrapper";
import { listData } from "../data/listData";

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

  const navigate = useNavigate();
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
            {listData.map((item, index) => (
              <React.Fragment key={item.id}>
                <DataWrapper>
                  <ImgWrapper src={item.src} alt="" />
                  <H2Styled>{item.title}</H2Styled>
                  <PStyled>{item.date}</PStyled>
                  <TextWrapper>{item.text}</TextWrapper>
                  <ButtonStyled onClick={() => handleEvent(item)}>
                    詳細画面へ
                  </ButtonStyled>
                </DataWrapper>
                {/* データが偶数かつ最後のアイテムでない場合、改行を追加 */}
                {index % 2 === 1 && index !== listData.length - 1 && <br />}
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
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
`;

const ImgWrapper = styled.img`
  border: 5px solid rgb(253, 253, 253);
  box-shadow: 0 5px 0 #eeeeee;
  border-radius: 1.5vw;
  width: 26vw;
  margin: auto;
`;

const TextWrapper = styled.p`
  display: none;
`;

const TestWrpapper = styled.div`
  margin: 140vw 8vw 40vw 8vw;
  width: -webkit-fill-available;
  -webkit-backdrop-filter: blur(70px);
  backdrop-filter: blur(70px);
  border-radius: 24px;
`;

const ButtonStyled = styled.button`
  color: rgb(253, 253, 253);
  margin: 0px 6vw;
  backdrop-filter: blur(100px);
  background: none;
  border-radius: 2vw;
  border-color: rgb(253, 253, 253);
`;

const H2Styled = styled.h2`
  margin: 1vw 5.5vw 0;
  color: #fdfdfd;
  font-size: 4.5vw;
`;

const PStyled = styled.p`
  margin: 1vw 5vw;
  font-size: 3.5vw;
  color: #f7f7f7;
`;

export default List;
