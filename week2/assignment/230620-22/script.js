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
function randomImg() {
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

// todo list 만들기
let todo = document.getElementById("todo");
let todoList = document.getElementById("todoList");

//todo input에 입력후 엔터시 
todo.addEventListener("keypress", function (key) {
  if (key.key === "Enter") {
    let todoValue = todo.value;
    console.log(`todovalue: ${todoValue}`);

    function createTodo(todoValue) {
      // create 'li' and insert todoValue into it
      let li = document.createElement("li");
      li.textContent = todoValue;

      // create a button that removes the 'li' when clicked
      let button = document.createElement("button");
      button.textContent = "X";
      button.addEventListener("click", function () {
        li.remove();
      });

      // add a class to the button
      button.classList.add("removeBtn");

      // add the button to the 'li'
      li.appendChild(button);

      return li;
    }

    todoList.appendChild(createTodo(todoValue));

    // clear todo.value
    todo.value = "";
  }
});

// 날씨 api 추가
const weather = document.getElementById("weather");
const API_KEY = "ecaa8fe3e7715f6d1ae130d4fddee0f9"; //내 거
// const API_KEY = '15f8fbf5168d6da001f1e3c2c4b76277'; //강사님 거
const iconSection = document.querySelector("#icon");

function getWeather(lat, lon) {
  console.log(lat, lon);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (json) {
      console.log(json);
      const temp = json.main.temp;
      const humidity = json.main.humidity;
      const located = json.name;
      const description = json.weather[0].description;

      const icon = json.weather[0].icon;
      const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

      iconSection.setAttribute('src', iconURL);

      console.log(temp);
      console.log(humidity);

      weather.innerHTML += `${located} <br/> ${temp}°C <br/> ${humidity}<br/> ${description}`;
    });
}

// 성공한 콜백
function handleGeoSuccess(pos) {
  // console.log(pos);

  const latitude = pos.coords.latitude;
  const longitude = pos.coords.longitude;

  // console.log(latitude);
  // console.log(longitude);

  getWeather(latitude, longitude);
}

// 실패한 콜백
function handleGeoError() {
  console.log("error");
}

// 초기화
// page load 될 때 가장 먼저 실행
function init() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

init();
