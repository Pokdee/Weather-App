import "./style.css";

const apiKey = "82f9aa8f740a4ab1b7980348232508";
const api = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q= `;
const img = document.querySelector(".current_img");
const text = document.querySelector(".current_text");
const countryName = document.querySelector(".location_country");
const cityName = document.querySelector(".location_city");
const temp = document.querySelector(".temp_text");
const tempFeel = document.querySelector(".temp_feels");
const wind = document.querySelector(".wind");
const humid = document.querySelector(".humidity");
const search = document.querySelector(".searchIn");

const displayData = function (data) {
  const location = data.location;
  const currentWeather = data.current;
  //location
  countryName.textContent = location.country;
  cityName.textContent = location.name;
  //weather
  text.textContent = currentWeather.condition.text;
  temp.textContent = currentWeather.temp_f;
  tempFeel.textContent = currentWeather.feelslike_f;
  wind.textContent = currentWeather.wind_mph;
  humid.textContent = currentWeather.humidity;
};

async function getData(apiUrl, city) {
  try {
    const res = await fetch(apiUrl + city);
    const data = await res.json();
    displayData(data);
  } catch (error) {
    // console.log(error);
    alert(`${city} does not exist`);
    search.value = "";
  }
}

search.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && search.value) {
    const searchCity = search.value;
    search.value = "";
    getData(api, searchCity);
  }
});

getData(api, "Paris");
