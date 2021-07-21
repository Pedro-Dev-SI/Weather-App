const apiKey = "82e1dabba677d9f9c3e69ef718c67212"
const units = "metric"
let horas = new Date()

const searchWeather = (cityName) => {
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`)
      .then(res => {
         return res.json();
      }).then(res =>{
         init(res)
      }) 
}

const init = (res) => {

   let bodyCard = document.getElementById('weather-box');
   let cityName = document.getElementById('city-name')
   let country = document.getElementById('country')
   let temperature = document.getElementById('temperature')
   let description = document.getElementById('description')
   let weatherIcon = document.getElementById('weather-icon')
   let windSpeed = document.getElementById('wind-speed')
   let humidityLevels = document.getElementById('weather-humidity')
   // res.weather[0].main

   switch ('Snow'){
      case 'Clear':
         
         if(horas.getHours() >= 18 && horas.getHours() < 6){
            bodyCard.style.backgroundImage = "url(../Assets/img/clear.png)"
         }else{
            bodyCard.style.backgroundImage = "url(../Assets/img/clear.png)"
         }

         break;
         
      case 'Clouds':

         if(horas.getHours() >= 18 && horas.getHours() < 6){
            bodyCard.style.backgroundImage = "url(../Assets/img/clouds-night.png)"
         }else{
            bodyCard.style.backgroundImage = "url(../Assets/img/clouds.png)"
         }

         break;

      case 'Rain':

         if(horas.getHours() >= 18 && horas.getHours() < 6){
            bodyCard.style.backgroundImage = "url(../Assets/img/rain-night.png)"
            temperature.style.color = 'white'
            description.style.color = 'white'
         }else{
            bodyCard.style.backgroundImage = "url(../Assets/img/rain.png)"
         }

         
         break;

      case 'Mist':
         if(horas.getHours() >= 18 && horas.getHours() < 6){
            bodyCard.style.backgroundImage = "url(../Assets/img/mist-night.png)"
         }else{
            bodyCard.style.backgroundImage = "url(../Assets/img/mist.png)"
         }
         
         break;

      case 'Drizzle':
         
         if(horas.getHours() >= 18 && horas.getHours() < 6){
            bodyCard.style.backgroundImage = "url(../Assets/img/drizzle-night.png)"
         }else{
            bodyCard.style.backgroundImage = "url(../Assets/img/drizzle.png)"
         }
         break;

      case 'Thunderstorm':
         
         if(horas.getHours() >= 18 && horas.getHours() < 6){
            bodyCard.style.backgroundImage = "url(../Assets/img/thunder-night.png)"
         }else{
            bodyCard.style.backgroundImage = "url(../Assets/img/thunder.png)"
         }
         break;
      case 'Snow':
         if(horas.getHours() >= 18 && horas.getHours() < 6){
            bodyCard.style.backgroundImage = "url(../Assets/img/snow-night.png)"
            temperature.style.color = 'white'
            description.style.color = 'white'
         }else{
            bodyCard.style.backgroundImage = "url(../Assets/img/snow.png)"
         }
         
         break;
      default:
         break;

   }

   

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

