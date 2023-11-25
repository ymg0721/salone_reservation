import React from "react";
import { useNavigate } from "react-router-dom";

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
    <div style={{ textAlign: "center" }}>
      <img src={imagePath} alt="" style={{ width: "15vw", height: "15vw" }} />
      <p>{value}</p>
      <button onClick={handleButtonClick}>{buttonText}</button>
    </div>
  );
};

export default VerticalComponent;
