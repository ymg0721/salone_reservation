import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Img from "../img/venereEmi_Icon.png";
import { useNavigate } from "react-router";

const Opening: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleAnimationEnd = () => {
    navigate("/home");
  };

  return (
    <Wrapper>
      <ContentContainer>
        <ImageContainer className={isMounted ? "fade-in" : ""}>
          <ImgWrapper src={Img} alt="" />
          {isMounted && (
            <TextContainer>
              <StyledInput
                type="button"
                value="ここをクリックしてください。"
                onClick={handleAnimationEnd}
              />
            </TextContainer>
          )}
        </ImageContainer>
      </ContentContainer>
    </Wrapper>
  );
};

const StyledInput = styled.input`
  background: none;
  border: none;
  color: #555;
  text-decoration: underline;
  cursor: pointer;
  font-size: 3vw;

  &:focus {
    outline: none;
  }
`;

const ImgWrapper = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const ImageContainer = styled.div`
  opacity: 0;
  transition: opacity 1.5s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  &.fade-in {
    opacity: 1;
  }
`;

const TextContainer = styled.div`
  text-align: center;
  color: white;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Wrapper = styled.div`
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export default Opening;
