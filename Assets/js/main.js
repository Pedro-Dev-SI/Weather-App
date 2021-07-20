const apiKey = "82e1dabba677d9f9c3e69ef718c67212"
const units = "metric"

const searchWeather = (cityName) => {
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`)
      .then(res => {
         return res.json();
      }).then(res =>{
         init(res)
      }) 
}

const init = (res) => {

   console.log(res);
   let bodyCard = document.getElementById('weather-box');

   switch (res.weather[0].main){
      case 'Clear':
         bodyCard.style.backgroundImage = "url(../Assets/img/clear.png)"
         break;
         
      case 'Clouds':
         bodyCard.style.backgroundImage = "url(../Assets/img/clouds.png)"
         break;

      case 'Rain':
         bodyCard.style.backgroundImage = "url(./img/rain.png)"
         break;

      case 'Mist':
         bodyCard.style.backgroundImage = "url(./img/mist.png)"
         break;

      case 'Drizzle':
         bodyCard.style.backgroundImage = "url(./img/drizzle.png)"
         break;

      case 'Thunderstorm':
         bodyCard.style.backgroundImage = "url(./img/thunder.png)"
         break;
      case 'Snow':
         bodyCard.style.backgroundImage = "url(./img/snow.png)"
         break;
      default:
         break;

   }

   let cityName = document.getElementById('city-name')
   let country = document.getElementById('country')
   let temperature = document.getElementById('temperature')
   let description = document.getElementById('description')
   let weatherIcon = document.getElementById('weather-icon')
   let windSpeed = document.getElementById('wind-speed')
   let humidityLevels = document.getElementById('weather-humidity')

   cityName.innerHTML = res.name
   country.innerHTML = res.sys.country
   temperature.innerHTML = Math.floor(res.main.temp) + '&#176'
   let weatherDescription = res.weather[0].description
   description.innerText = weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1)
   weatherIcon.src = 'https://openweathermap.org/img/wn/' + res.weather[0].icon + '.png'
   windSpeed.innerHTML = 'Wind speed at ' + Math.floor(res.wind.speed) + 'm/s'
   humidityLevels.innerHTML = 'Humidity levels at ' + res.main.humidity + '%'

   setWeatherCard()

}

const setWeatherCard = () => {
   let weatherBox = document.getElementById('weather-box')
   weatherBox.style.visibility = 'visible'
}

document.getElementById('search-btn').addEventListener('click', () => {
   let city = document.getElementById('city-input').value

   if(city){
      searchWeather(city)
   }


})

