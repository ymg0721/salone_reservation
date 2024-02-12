import React, { useEffect } from "react";
import styled from "@emotion/styled";

// フッターメニューコンポーネント
const BotomUp: React.FC = () => {
  useEffect(() => {
    if (window.location.pathname !== "/") {
      return;
    }
  }, []);

  return (
    window.location.pathname !== "/" && (
      <AWrapper02 href="/home" id="a2">
        ホームへ
      </AWrapper02>
    )
  );
};

const AWrapper02 = styled.a`
  backdrop-filter: blur(100px);
  bottom: 98px;
  border-radius: 50px;
  color: #fff;
  padding: 20px;
  position: fixed;
  right: 0;
  font-weight: 600;
`;

export default BotomUp;
