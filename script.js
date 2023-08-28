const apiKey = "82f9aa8f740a4ab1b7980348232508";
const api = `http://api.weatherapi.com/v1/current.json?key=82f9aa8f740a4ab1b7980348232508&q=Paris `;
const img = document.querySelector(".current_img");
const text = document.querySelector(".current_text");
const countryName = document.querySelector(".location_country");
const cityName = document.querySelector(".location_city");
const temp = document.querySelector(".temp_text");
const tempFeel = document.querySelector(".temp_feels");
const wind = document.querySelector(".wind");
const humid = document.querySelector(".humidity");

async function getData(apiUrl) {
  const res = await fetch(apiUrl);
  const data = await res.json();
  // console.log(data);

  const location = data.location;
  const currentWeather = data.current;
  //location
  countryName.textContent = location.country;
  cityName.textContent = location.name;
  //weather
  console.log(currentWeather);
  // img.src = currentWeather.condition.icon;
  text.textContent = currentWeather.condition.text;
  temp.textContent = currentWeather.temp_f;
  tempFeel.textContent = currentWeather.feelslike_f;
  wind.textContent = currentWeather.wind_mph;
  humid.textContent = currentWeather.humidity;
}

getData(api);
