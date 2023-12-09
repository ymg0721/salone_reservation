import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

interface VerticalComponentProps {
  value: string;
  imagePath: string;
  buttonText: string;
  transitionPath: string;
}

const VerticalComponent: React.FC<VerticalComponentProps> = ({
  value,
  imagePath,
  buttonText,
  transitionPath,
}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // ボタンクリック時の処理（例: パスに移動する）
    navigate(transitionPath);
  };

  return (
    <Wrapper>
      <ImgWrapper src={imagePath} alt="" />
      <p>{value}</p>
      <button onClick={handleButtonClick}>{buttonText}</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  textalign: center;
`;

const ImgWrapper = styled.img`
  width: 15vw;
  height: 15vw;
`;

export default VerticalComponent;
