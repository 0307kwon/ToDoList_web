const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h2");

function updateClock(){
    const date = new Date();
    const hours = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    clockTitle.innerText = `${hours <10? `0${hours}` : `${hours}`}:${min <10? `0${min}` : `${min}`}:${sec <10? `0${sec}` : `${sec}`}`
}


function init(){
    updateClock();
    setInterval(updateClock,1000);
}

init();