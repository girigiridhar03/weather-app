// https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=230f9a2cf5d090243bdaf48ec55a661c&units=metric
const image = document.querySelector(".weather img");
const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const fetchUrl = async (city)=>{
     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=230f9a2cf5d090243bdaf48ec55a661c&units=metric`);
    if(response.status == 404){
       document.querySelector(".error").style.display = "block";
       document.querySelector(".weather").style.display = "none";
    }
    else{

         const data = await response.json();
        
         document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
         document.querySelector(".city-name").innerHTML = data.name;
         document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
         document.querySelector(".wind").innerHTML = data.wind.speed+"km/h";
     
         if(data.weather[0].main == "Clouds"){
               image.src = "./images/clouds.png"
         }
         else if(data.weather[0].main == "Clear"){
               image.src = "./images/clear.png"
         }
         else if(data.weather[0].main == "Drizzle"){
               image.src = "./images/drizzle.png"
         }
        else if(data.weather[0].main == "Rain"){
               image.src = "./images/rain.png"
         }
        else if(data.weather[0].main == "Snow"){
               image.src = "./images/snow.png"
         }
        else if(data.weather[0].main == "Mist"){
               image.src = "./images/mist.png"
         }
         
         document.querySelector(".weather").style.display = "block";
         document.querySelector(".error").style.display = "none";
    }
     

}

searchBtn.addEventListener("click",()=>{
      fetchUrl(searchInput.value);

})