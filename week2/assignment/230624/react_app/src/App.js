import Clock from "components/clock";
import Greeting from "components/greeting";
import Image from "components/randomImg";
import Todo from "components/todo";
import Weather from "components/weather";
// import "style.css";

// 1. React를 이용하여 배경이미지 랜덤 변경
// 2. React를 이용하여 인사 만들기
// 3. React를 이용하여 시계 만들기

function App() {
  return (
    <>
      <Todo />
      <Clock />
      <Image />
      <Greeting />
      <Weather />
    </>
  );
}

export default App;
