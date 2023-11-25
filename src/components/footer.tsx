import React from "react";
import styled from "@emotion/styled";

// メニューアイテムの型
interface MenuItem {
  label: string;
  link: string;
  img?: string;
}

// フッターメニューのプロップスの型
interface FooterMenuProps {
  menuItems: MenuItem[];
}

// フッターメニューコンポーネント
const FooterMenu: React.FC<FooterMenuProps> = ({ menuItems }) => {
  return (
    <FooterStyled>
      {menuItems.map((item, index) => (
        <ImgWrapperStyled key={index}>
          <ImgStyled src={item.img} alt="" />
          <a href={item.link}>{item.label}</a>
        </ImgWrapperStyled>
      ))}
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-between;
  margin: 0 4vw;
  position: absolute;
  bottom: 20px;
  width: 90%;
`;

const ImgWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const ImgStyled = styled.img`
  width: 10vw;
`;

export default FooterMenu;
