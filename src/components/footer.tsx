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
    <FooterStyled id="footer">
      {menuItems.map((item, index) => (
        <ImgWrapperStyled href={item.link} key={index}>
          <ImgStyled src={item.img} alt="" />
          {item.label}
        </ImgWrapperStyled>
      ))}
    </FooterStyled>
  );
};

const ImgWrapperStyled = styled.a`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  color: #1b1811;
  padding: 10px;
  font-weight: 500;
  border-radius: 30px;
`;

const FooterStyled = styled.footer`
  display: flex;
  width: 100%;
  grid-template-rows: 1fr;
  color: #fff;
  position: fixed;
  bottom: 0px;
  backdrop-filter: blur(100px);
`;

const ImgStyled = styled.img`
  max-width: 50px;
  max-height: 70px;
  width: 100%;
  height: 100%;
`;

export default FooterMenu;
