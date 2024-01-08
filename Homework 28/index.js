"use strict";

function getWeather() {
  const apiUrl =
    "http://api.openweathermap.org/data/2.5/weather?q=Vinnytsia&units=metric&APPID=5d066958a60d315387d9492393935c19";
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const weatherData = JSON.parse(xhr.responseText);
      const temperature = weatherData.main.temp;
      const pressure = weatherData.main.pressure;
      const description = weatherData.weather[0].description;
      const humidity = weatherData.main.humidity;
      const windSpeed = weatherData.wind.speed;
      const windDirection = weatherData.wind.deg;
      const iconCode = weatherData.weather[0].icon;

      const weatherInfoContainer = document.createElement("div");
      const temperatureElement = document.createElement("p");
      const pressureElement = document.createElement("p");
      const descriptionElement = document.createElement("p");
      const humidityElement = document.createElement("p");
      const windSpeedElement = document.createElement("p");
      const windDirectionElement = document.createElement("p");
      const iconElement = document.createElement("img");

      temperatureElement.textContent = "Temp: " + temperature + "°C";
      pressureElement.textContent = "Pressure: " + pressure + " hPa";
      descriptionElement.textContent = "Description: " + description;
      humidityElement.textContent = "Humidity: " + humidity + "%";
      windSpeedElement.textContent = "Speed wind: " + windSpeed + " м/с";
      windDirectionElement.textContent =
        "Wind direction: " + windDirection + "°";
      iconElement.src = "http://openweathermap.org/img/w/" + iconCode + ".png";

      weatherInfoContainer.appendChild(temperatureElement);
      weatherInfoContainer.appendChild(pressureElement);
      weatherInfoContainer.appendChild(descriptionElement);
      weatherInfoContainer.appendChild(humidityElement);
      weatherInfoContainer.appendChild(windSpeedElement);
      weatherInfoContainer.appendChild(windDirectionElement);
      weatherInfoContainer.appendChild(iconElement);

      const weatherContainer = document.getElementById("weather-info");
      weatherContainer.innerHTML = "";
      weatherContainer.appendChild(weatherInfoContainer);
    }
  };

  xhr.open("GET", apiUrl, true);
  xhr.send();
}

window.onload = getWeather;
