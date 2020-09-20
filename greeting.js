const greetText = document.querySelector(".js-greeting");


const formContainer = document.querySelector(".js-form");
const input = formContainer.querySelector("input");

const USER_NAME = "userName";
const SHOWING = "showing";

function paintGreeting(greetName){
    formContainer.classList.remove(SHOWING);
    greetText.classList.add(SHOWING);
    
    greetText.innerText = `${greetName}님 환영합니다.`
}

function paintForm(){
    formContainer.classList.add(SHOWING);
    greetText.classList.remove(SHOWING);
}

function showGreeting(){
    const greetName = localStorage.getItem(USER_NAME);
    if(greetName == null){
        paintForm();
    }else{
       paintGreeting(greetName);
    }
}

function handleSubmit(event){
    event.preventDefault();
    const inputText =input.value;

    localStorage.setItem("userName",inputText);
    paintGreeting(inputText);
}

function init(){
    formContainer.addEventListener("submit",handleSubmit);
    showGreeting();
}

init();