// 랜덤 배경 이미지
let img = document.getElementById("image");
let imgArray = [
  "../img/img1.jpg",
  "../img/img2.jpg",
  "../img/img3.jpg",
  "../img/img4.jpg",
  "../img/img5.jpg",
  "../img/img6.jpg",
  "../img/img7.jpg",
  "../img/img8.jpg",
];

// 클릭 시 랜덤 이미지 변경
img.addEventListener("click", randomImg);
function randomImg(){
    let mainImg = imgArray[Math.floor(Math.random() * imgArray.length)];
    // console.log("main : " + mainImg);
    img.src = mainImg;
}

// 인사 출력
let nameInput = document.getElementById("writeName");
let wrap = document.getElementById("innerWrap");
let greet = document.getElementById("greeting");

// 가져온 객체에 EventListener추가. (keypress: 키입력 감지)
nameInput.addEventListener("keypress", function (key) {
  // key.key 의 값이 Enter 일 경우 코드 실행
  // key.keyCode == 13 도 동일한 기능.
  if (key.key === "Enter") {
    let nameValue = nameInput.value;
    console.log(`name: ${nameValue}`);

    // enter시 클래스명 변경
    nameInput.classList.replace("active", "hidden");
    greet.classList.replace("hidden", "active");

    let addName = document.getElementById("addName");
    addName.innerText = nameValue;
  }
});


// 시계 만들기
let clock = document.getElementById("clock");

function updateTime() {
  let date = new Date();
  // console.log(date);

  //시간 16:01 식으로 표기하기
  let options = { hour: "numeric", minute: "numeric", hour12: false };
  let timeString = date.toLocaleTimeString(undefined, options);
  
  clock.innerHTML = timeString;
}
updateTime(); // 시계 먼저 load
setInterval(updateTime, 1000); 

