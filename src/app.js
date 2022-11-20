let h1 = document.querySelector("h1");
let temperature = document.querySelector("#temperature");
let humidity = document.querySelector("#humidity");
let wind = document.querySelector("#wind");
let cityInput = document.querySelector(".city-input");
let conditionDescription = document.querySelector("#conditionDescription");
let h6 = document.querySelector("h6");
let icon = document.querySelector("#icon");

let fahrenheit = document.querySelector("#fahrenheit");
let celsius = document.querySelector("#celsius");

let formSearchCity = document.querySelector("#formSearchCity");
formSearchCity.addEventListener("submit", nameCity);

function dispayWeek() {
  let theWeek = document.querySelector("#theweek");

  let theWeekElemen = "";
  theWeekElemen =
    theWeekElemen +
    `
    <div class="row">
          <div class="col-2">
            <div>giorno</div>
            <img src="" alt="" />
            <div>
              <span>tep1</span>
              <span>tep2</span>
            </div>
          </div>
        </div>`;
  theWeek.innerHTML = theWeekElemen;
}
console.log(dispayWeek());

function nameCity(respons) {
  respons.preventDefault();
  console.log(cityInput.value);

  function newCity(event) {
    const date = new Date();

    let weekDay = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = weekDay[date.getDay()];
    let hour = date.getHours();
    let minute = date.getMinutes();

    console.log(axios.get(apiCall));
    let cityTemperature = event.data.main.temp;
    let cityHumidity = event.data.main.humidity;
    let cityconditionDescription = event.data.weather[0].description;
    let cityWind = event.data.wind.speed;
    let name = event.data.name;
    let cityIcon = event.data.weather[0].icon;
    icon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${cityIcon}@2x.png`
    );

    /*  fahrenheit.addEventListener("click", setFahrenheit); */
    celsius.addEventListener("click", setCelsius);

    h6.innerHTML = `${day} ${hour}:${minute} `;
    h1.innerHTML = name;
    conditionDescription.innerHTML = cityconditionDescription;
    humidity.innerHTML = `Humidity: ${cityHumidity}%`;
    wind.innerHTML = `Wind: ${cityWind} km/h`;

    // temperature
    let celsTemperature = `${Math.round(cityTemperature)}`;
    temperature.innerHTML = celsTemperature;
    /*  function setFahrenheit() {
      let fahTemperature = Math.round((cityTemperature * 9) / 5 + 32);
      temperature.innerHTML = fahTemperature;
    } */
    function setCelsius() {
      temperature.innerHTML = celsTemperature;
    }
  }

  //call axios
  //let apiKey = "6635c3cd0efte3e3f8002aa10416bo29";
  let apiKey = "25fad9f7e87157d33dde0f82ab269ee8";

  query = cityInput.value;
  let apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${apiKey}`;

  //let apiCall = `https://api.shecodes.io/weather/v1/forecast?query=${query}&key=${apiKey}`;
  axios.get(apiCall).then(newCity);
}
