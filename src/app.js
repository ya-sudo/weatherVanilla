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

function getCoordinates(coordinate) {
  let apiKey = "25fad9f7e87157d33dde0f82ab269ee8";
  let test = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinate.lat}&lon=${coordinate.lon}&appid=${apiKey}`;
  let apiCallCoordinate = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinate.lat}&lon=${coordinate.lon}&appid=${apiKey}&units=metric`;
  console.log(apiCallCoordinate);
  axios.get(apiCallCoordinate).then(dispayWeek);
}

function creatDay(dateDay) {
  let date = new Date(dateDay * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tues", "Wedn", "Thurs", "Fri", "Satur"];
  return days[day];
}

function dispayWeek(respons) {
  let weekDay = respons.data.daily;
  console.log(respons.data.daily);
  let theWeek = document.querySelector("#theweek");

  let theWeekElemen = "";

  let days = ["lu", "ma", "mer"];
  weekDay.forEach(function (dayName, index) {
    if (index < 6) {
      theWeekElemen =
        theWeekElemen +
        `
        
              <div class="col-2">
                <div>${creatDay(dayName.dt)}</div>


                <img src=" http://openweathermap.org/img/wn/${
                  dayName.weather[0].icon
                }@2x.png" alt="" />
                <div>
                  <span>min ${dayName.temp.min}°</span>
                  <span>max ${dayName.temp.max}°</span>
                </div>
              </div>
            `;
    }
  });
  theWeek.innerHTML = theWeekElemen;
}

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

    function setCelsius() {
      temperature.innerHTML = celsTemperature;
    }

    getCoordinates(event.data.coord);
    let lat = event.data.coord.lat;
    let lon = event.data.coord.lon;
  }

  //call axios
  //let apiKey = "6635c3cd0efte3e3f8002aa10416bo29";
  let apiKey = "25fad9f7e87157d33dde0f82ab269ee8";

  query = cityInput.value;
  let apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${apiKey}`;

  //let apiCall = `https://api.shecodes.io/weather/v1/forecast?query=${query}&key=${apiKey}`;
  axios.get(apiCall).then(newCity);
}
