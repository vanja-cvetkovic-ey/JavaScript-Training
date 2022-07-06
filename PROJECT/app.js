"use strict";

let searchBtn = document.querySelector("#searchBtn");
let searchCity = document.querySelector("#searchCity");

let loading = document.querySelector("#load");
let weatherBox = document.querySelector("#weather");

let weatherCity = document.querySelector("#weatherCity");
let weatherDescrption = document.querySelector("#weatherDescription");
let weatherTemperature = document.querySelector("#weatherTemperature");

searchBtn.addEventListener("click", () => {
  loading.style.display = "block";
  let city = searchCity.value;
  searchCity.value = "";
  console.log(city);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a087f168e5mshae6bf8bc3ad1e57p1ec68fjsn5606dce549f1",
      "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
    },
  };

  fetch(
    `https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&lat=0&lon=0&id=2172797&lang=null&units=metric`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      var weatherData = new Weather(city, response.weather[0].description);
      weatherData.temperature = response.main.temp;
      updateWeather(weatherData);
      console.log(weatherData);
    })
    .catch((err) => console.error(err));
});

function Weather(cityName, description) {
  this.cityName = cityName;
  this.description = description;
  this._temperature = "";
}

Object.defineProperty(Weather.prototype, "temperature", {
  get: function () {
    return this._temperature;
  },
  set: function (value) {
    this._temperature = value;
  },
});

function updateWeather(weatherData) {
  loading.style.display = "none";
  weatherBox.style.display = "block";
  weatherCity.textContent = weatherData.cityName;
  weatherDescrption.textContent = weatherData.description;
  weatherTemperature.textContent = `${weatherData.temperature} °C`;
}
