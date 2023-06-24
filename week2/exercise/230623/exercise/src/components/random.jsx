import React from "react";

// ------------------미완성------------------
// 1. 숫자 랜덤 생성기 만들기
// 2. Props 이용하여 min, max값 (1~100) 넣어보기
function RandomNumber() {

  const Random = () => {
    const num = parseInt(Math.random() * 100) + 1;

    console.log(num);

  };
  return (
    <>
      <button onClick={Random}></button>
    </>
  );
}

export default RandomNumber;
