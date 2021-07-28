const apiKey = "82e1dabba677d9f9c3e69ef718c67212"
const units = "metric"
let horas = new Date()
let horaAtual = horas.getHours()


const searchWeather = (cityName) => {

   
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`)
   .then(res => {
      return res.json();
   }).then(res =>{
      try{
         init(res)
      }catch(e){
         mostraErro();
      }
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
      

   switch (res.weather[0].main){
      case 'Clear':
         
         if(horaAtual >= 6 && horaAtual <= 18){
            bodyCard.style.backgroundImage = "url(../Assets/img/clear.png)"
         }else{
            bodyCard.style.backgroundImage = "url(../Assets/img/clear-night.png)"
         }

         break;
         
      case 'Clouds':

         if(horaAtual >= 6 && horaAtual <= 18){
            bodyCard.style.backgroundImage = "url(../Assets/img/clouds.png)"
         }else{       
            bodyCard.style.backgroundImage = "url(../Assets/img/clouds-night.png)"
            temperature.style.color = 'white'
            description.style.color = 'white'
         }

         break;

      case 'Rain':

         if(horaAtual >= 6 && horaAtual <= 18){
            bodyCard.style.backgroundImage = "url(../Assets/img/rain.png)"
         }else{    
            bodyCard.style.backgroundImage = "url(../Assets/img/rain-night.png)"
            temperature.style.color = 'white'
            description.style.color = 'white'
         }

         
         break;

      case 'Mist':
         if(horaAtual >= 6 && horaAtual <= 18){
            bodyCard.style.backgroundImage = "url(../Assets/img/mist.png)"
         }else{        
            bodyCard.style.backgroundImage = "url(../Assets/img/mist-night.png)"
         }
         
         break;

      case 'Drizzle':
         
         if(horaAtual >= 6 && horaAtual <= 18){
            bodyCard.style.backgroundImage = "url(../Assets/img/drizzle.png)"
         }else{
            bodyCard.style.backgroundImage = "url(../Assets/img/drizzle-night.png)" 
         }
         break;

      case 'Thunderstorm':
         
         if(horaAtual >= 6 && horaAtual <= 18){
            bodyCard.style.backgroundImage = "url(../Assets/img/thunder.png)"
         }else{      
            bodyCard.style.backgroundImage = "url(../Assets/img/thunder-night.png)"
         }
         break;
      case 'Snow':
         if(horaAtual >= 6 && horaAtual <= 18){
            bodyCard.style.backgroundImage = "url(../Assets/img/snow.png)"
         }else{ 
            bodyCard.style.backgroundImage = "url(../Assets/img/snow-night.png)"
            temperature.style.color = 'white'
            description.style.color = 'white'
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

   let cardErro = document.getElementById('card-erro')
   cardErro.style.visibility = 'hidden'
}

const mostraErro = () => {
   
   let cardErro = document.getElementById('card-erro')
   cardErro.style.visibility = 'visible';

   let weatherBox = document.getElementById('weather-box')
   weatherBox.style.visibility = 'hidden'
   
}

const limpaInput = () => {
   const inputCity = document.getElementById('city-input');
   inputCity.value = '';
   inputCity.focus();
}

document.getElementById('search-btn').addEventListener('click', () => {
   let city = document.getElementById('city-input').value

   if(city){
      searchWeather(city)
      limpaInput();
   }
})


