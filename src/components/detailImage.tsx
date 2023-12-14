import React, { useState, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import styled from "@emotion/styled";
import Title01 from "../../src/img/title01.jpg";
import Title02 from "../../src/img/title02.jpg";
import Title03 from "../../src/img/title03.jpg";
import Title04 from "../../src/img/title04.jpg";

const images = [Title01, Title02, Title03, Title04];

const DetailImage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.molasses, // 例: molassesという設定を使用
    reset: true,
    onRest: () => {
      // フェードインが完了したら次の画像に切り替える
      const randomIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(randomIndex);
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // フェードインアニメーションをトリガーする
      fadeIn.opacity.set(0);
      fadeIn.opacity.set(1);
    }, 3000 * 5); // 2秒ごとにトリガーする（5倍遅く）

    return () => clearInterval(interval);
  }, [fadeIn, currentImageIndex]);

  const imageSrc = images[currentImageIndex];

  return (
    <Wrapper id="titleImage">
      <AnimatedStyled
        src={imageSrc}
        alt={`Image ${currentImageIndex + 1}`}
        style={{
          ...fadeIn,
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: ${window.innerHeight}px;
`;

const AnimatedStyled = styled(animated.img)`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 5px 5px 10px rgba(240, 224, 208, 1);
  border-radius: 5px;
`;

export default DetailImage;
