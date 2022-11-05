let query = "Lisbon";
let apiKey = "6635c3cd0efte3e3f8002aa10416bo29";

let apiCall = `https://api.shecodes.io/weather/v1/forecast?query=${query}&key=${apiKey}`;

console.log(axios.get(apiCall));
let h1 = document.querySelector("h1");
let temperature = document.querySelector("#temperature");
let humidity = document.querySelector("#humidity");
let wind = document.querySelector("#wind");

function nameCity(respons) {
  let name = respons.data.city;
  let cityTemperature = respons.data.daily[0].temperature.day;
  let cityHumidity = respons.data.daily[0].temperature.humidity;
  let cityWind = respons.data.daily[0].wind.speed;

  h1.innerHTML = name;
  temperature.innerHTML = `${Math.round(cityTemperature)}`;
  humidity.innerHTML = `Humidity: ${cityHumidity}%`;
  wind.innerHTML = `Wind: ${cityWind} km/h`;
}
axios.get(apiCall).then(nameCity);
