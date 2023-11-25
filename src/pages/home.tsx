import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Footer from "../components/footer";
import { announcements } from "../data/announce";
import { menuItems } from "../data/menuItems";
import TitleImage from "../components/titleImage";
import HomeNotice from "../components/homeNotice";

const fadeInAnimation = `
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Container = styled.div`
  animation: fadeIn 1s ease-in-out;
  ${fadeInAnimation}
`;

const Home: React.FC = () => {
  // const [fade, setFade] = useState(false);

  // useEffect(() => {
  //   // マウント時にフェードインを開始
  //   setFade(true);

  //   // フェードインが完了したら、1秒後にフェードアウトを開始
  //   const timeoutId = setTimeout(() => {
  //     setFade(false);
  //   }, 500);

  //   // コンポーネントがアンマウントされたときにクリーンアップ
  //   return () => clearTimeout(timeoutId);
  // }, []);

  return (
    <Container>
      <Wrapper>
        <TitleImage />
        <h2>お知らせ</h2>
        {announcements.map((announcement, index) => (
          <HomeNotice key={index} {...announcement} />
        ))}
        <Footer menuItems={menuItems} />
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  background: pink;
  height: 100vh;
`;

export default Home;
