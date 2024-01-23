const apikey="024769b0a63d9166881a2ef45225b5ca";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weathericon=document.getElementsByClassName(".weather-icon");

async function  checkweather(city){
    let response=await fetch(apiurl+city+`&appid=${apikey}`);
    if(response.status==404){
        alert("Invalid City Name");
    }
    
    else{
        let data=await response.json();
    console.log(data);
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=data.main.temp+" °C";
    document.querySelector('.humidity').innerHTML=data.main.humidity+"%";
    document.querySelector('.wind').innerHTML=data.wind.speed+" kmph";

    if(data.weather[0].main=="Clouds"){
        weathericon.src="images/clouds.png";
    }
    else if(data.weather[0].main=="mist"){
        weathericon.src="images/mist.png";
    }
    else if(data.weather[0].main=="clear"){
        weathericon.src="images/clear.png";
    }
    else if(data.weather[0].main=="drizzle"){
        weathericon.src="images/drizzle.png";
    }
    else if(data.weather[0].main=="rain"){
        weathericon.src="images/rain.png";
    }
    else if(data.weather[0].main=="snow"){
        weathericon.src="images/snow.png";
    }
    }


    // document.querySelector(".wether").style.display="block";
}


searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})


