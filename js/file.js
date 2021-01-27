//get Date
var today = new Date();
var day= today.getDay();
var mm= today.getMonth()
var dd = String(today.getDate()).padStart(2, '0');

var yyyy = today.getFullYear();
switch(day)
{
    case 0: day="Dimanche"
    break;
    case 1: day="Lundi"
    break;
    case 2: day="Mardi"
    break;
    case 3: day="Mercredi"
    break;
    case 4: day="Jeudi"
    break;
    case 5: day="Vendredi"
    break;
    case 6: day="Samedi"
    break;
}
switch(mm)
{
    case 0 : mm="Janvier"
    break;
    
    case 1 : mm="Février"
    break;
    
    case 2 : mm="Mars"
    break;
    
    case 3 : mm="Avril"
    break;

    case 4 : mm="Mai"
    break;
    
    case 5 : mm="Juin"
    break;

    case 6 : mm="Juillet"
    break;
    
    case 7 : mm="Aout"
    break;
    
    case 8 : mm="Septembre"
    break;
    
    case 9 : mm="Octobre"
    break;
    
    case 10 : mm="Novembre"
    break;
    
    case 11 : mm="Décembre"
    break;

}
today=`Le ${day} ${dd} ${mm} ${yyyy}`

document.getElementById("date").innerHTML=today;

//Temperature
//select elements
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const notificationElement = document.querySelector(".notification");

// App data
const weather = {
    
};

weather.temperature = {
    unit : "celsius"
}

// APP CONSTS AND VARS
const KELVIN = 273;
// API KEY
const key = "c475116620718bf7b4b546736c130e86";

// CHECK IF BROWSER SUPPORTS GEOLOCATION
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
    
}else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}

// SET USER'S POSITION
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    getWeather(latitude, longitude);
}
// SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
function showError(error){
    notificationElement.style.display = "block"
    alert(" Votre navigateur ne supporte pas la localisation ");
}

//get weather from api

function getWeather(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

    fetch(api)
        .then(function(response){
            let data = response.json()
            return data
        })
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - KELVIN)
            weather.iconId = data.weather[0].icon
          
            
        })
        .then(function(){
            displayWeather()
        });
}

// DISPLAY WEATHER TO UI
function displayWeather(){
    iconElement.innerHTML = `<img src="/icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;

}

// C to F conversion
function celsiusToFahrenheit(temperature){
    return (temperature * 9/5) + 32;
}

// WHEN THE USER CLICKS ON THE TEMPERATURE ELEMENET
tempElement.addEventListener("click", function(){
    if(weather.temperature.value === undefined) return;
    
    if(weather.temperature.unit == "celsius"){
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        fahrenheit = Math.floor(fahrenheit);
        
        tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
        weather.temperature.unit = "fahrenheit";
    }else{
        tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
        weather.temperature.unit = "celsius"
    }
});

//carousel
/*var count=1;
setInterval(function(){
    document.getElementById('radio' + count).checked = true
    count++;
    if(count > 5)
    {
        count=1;
        
        document.querySelectorAll("#radio1:checked ~ .first").style.marginLeft = "200%";
        
    }

},2500);*/

//scroll



  $( document ).ready(function() {
    $(window).scroll(function(){
      var winTop = $(window).scrollTop();
      if(winTop >= 30){
        $("body").addClass("scroll");
      }else{
        $("body").removeClass("scroll");
      }//if-else
    });//win func.
  });//ready func.