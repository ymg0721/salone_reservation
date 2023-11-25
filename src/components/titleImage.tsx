import React, { useState, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import Title01 from "../../src/img/title01.jpg";
import Title02 from "../../src/img/title02.jpg";
import Title03 from "../../src/img/title03.jpg";
import Title04 from "../../src/img/title04.jpg";

const images = [Title01, Title02, Title03, Title04];

const TitleImage: React.FC = () => {
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
    }, 3000 * 2); // 2秒ごとにトリガーする（5倍遅く）

    return () => clearInterval(interval);
  }, [fadeIn, currentImageIndex]);

  const imageSrc = images[currentImageIndex];

  return (
    <div>
      <animated.img
        src={imageSrc}
        alt={`Image ${currentImageIndex + 1}`}
        style={{
          width: "100%", // 幅を100%に設定
          height: "300px", // 高さを一定の値に設定
          objectFit: "cover", // 親要素に合わせて画像を拡大/縮小
          ...fadeIn,
          boxShadow: "5px 5px 10px rgba(240, 224, 208, 1)",
          borderRadius: "5px",
        }}
      />
    </div>
  );
};

export default TitleImage;
