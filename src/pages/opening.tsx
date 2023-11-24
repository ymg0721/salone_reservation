import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Img from "../img/venereEmi_Icon.png";
import { useNavigate } from "react-router-dom";

const MyComponent: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // マウント後にアニメーションをトリガーする
    setIsMounted(true);
    // navigate("/");
  }, []);
  return (
    <Wrapper>
      <ImageContainer className={isMounted ? "slide-in" : ""}>
        <ImgWrapper src={Img} alt="" />
      </ImageContainer>
    </Wrapper>
  );
};

const ImgWrapper = styled.img`
  width: 50%;
  height: 50%;
`;

const ImageContainer = styled.div`
  opacity: 0;
  transform: translateY(-50px);
  transition: opacity 1.5s ease-out, transform 1.5s ease-out;

  &.slide-in {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  padding: 25%;
  background: black;
  width: 100vw;
  height: 100vh;
`;

export default MyComponent;
