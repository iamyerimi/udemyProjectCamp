import React, { useEffect, useState, useMemo } from "react";

function RandomImage() {
  const [mainImg, setMainImg] = useState("");

  // 이미지 배열을 useMemo 훅을 사용하여 초기화
  const imgArray = useMemo(
    () => [
      "../img/img1.jpg",
      "../img/img2.jpg",
      "../img/img3.jpg",
      "../img/img4.jpg",
      "../img/img5.jpg",
      "../img/img6.jpg",
      "../img/img7.jpg",
      "../img/img8.jpg",
    ],
    []
  );

  // 5초마다 이미지 변경하는 함수
  useEffect(() => {
    // 이미지 변경 인터벌 설정
    const interval = setInterval(() => {
      const newImg = imgArray[Math.floor(Math.random() * imgArray.length)];
      setMainImg(newImg);
    }, 5000);

    // 컴포넌트 언마운트 시 인터벌 클리어
    return () => {
      clearInterval(interval);
    };
  }, [imgArray]);

  return (
    <div>
      <div className="imgWrap">
        <img
          id="image"
          src={mainImg}
          alt="bgImage"
          onClick={() => setMainImg(imgArray[Math.floor(Math.random() * imgArray.length)])}
        />
      </div>
    </div>
  );
}

export default RandomImage;
