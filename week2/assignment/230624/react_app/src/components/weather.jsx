import React, { useEffect, useState } from "react";

// 제대로 안됐음 수정 필요
function Weather() {
  const [weather, setWeather] = useState("");
  const API_KEY = "ecaa8fe3e7715f6d1ae130d4fddee0f9";

  const handleGeoError = () => {
    console.log("failed!");
  };

  const handleGeoSuccess = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    getWeather(latitude, longitude);
  };

  const getWeather = (lat, lon) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        const description = json.weather[0].description;
        setWeather(`${temperature} <br /> ${place} <br/> ${description} `);
      });
  };

   // 성공한 콜백, 실패한 콜백
   const askForCoords = () => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
  };

  useEffect(() => {
    askForCoords();
  }, []);
  return <div className="js-weather">{weather && <p>{weather}</p>}</div>;
}

export default Weather;
