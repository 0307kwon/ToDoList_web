const API_KEY = "ab5d121ede1fb4635de304dc80667025";
const POS = "position";

const weatherContainer = document.querySelector(".js-weather");

function savePosition(posObj){
    localStorage.setItem(POS,JSON.stringify(posObj));
}

function getWeather(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).
    then(function(response){
        return response.json();
    }).then(function(json_body){
        const temp = json_body.main.temp;
        const place = json_body.name;
        weatherContainer.innerText = `${temp} @ ${place}`;
    });

}

function handlePositionGet(position){
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    const posObj = {
        latitude,
        longitude
    }
    savePosition(posObj);
    getWeather(latitude,longitude);
}

function handlePositionError(){
    console.log("fail to receive position data");
}

function getMyPosition(){
    navigator.geolocation.getCurrentPosition(handlePositionGet,handlePositionError);
}

function loadPosition(){
    const myPosition = JSON.parse(localStorage.getItem(POS));
    if(myPosition == null){
        getMyPosition();
    }else{
        getWeather(myPosition.latitude,myPosition.longitude);
    }
}

function init(){
    loadPosition();
}

init();