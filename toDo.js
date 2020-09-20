const toDoContainer = document.querySelector(".js-form-toDoInput");
const toDoInputText = toDoContainer.querySelector("input");

const toDoListContainer = document.querySelector(".js-div-toDoList");

const toDoList =[];

function handleClick(event){
    console.log(event);


}

function saveToDoList(){
    const json = JSON.stringify(toDoList);
    localStorage.setItem("toDoList",json);
}


function paintNewList(text,id){
    const li = document.createElement("li");
    const btn = document.createElement("button");
    const span = document.createElement("span");
    
    btn.innerText = " x ";
    span.innerText = `${text}  `;
    li.id = id;
    btn.addEventListener("click",handleClick);
    li.appendChild(span);
    li.appendChild(btn);
    toDoListContainer.appendChild(li);
}


function pushToDoLIst(text){
    const id = toDoList.length;
    const toDoListObj = {
        text : text,
        id : id
    }
    toDoList.push(toDoListObj);
    saveToDoList();
    paintNewList(text,id);
}


function handleSubmit(event){
    const text = toDoInputText.value;
    event.preventDefault();
    pushToDoLIst(text);
    toDoInputText.value = "";
}

function loadToDoList(){
    const tempList = JSON.parse(localStorage.getItem("toDoList"));
    for(let i=0; i<tempList.length; i++){
        paintNewList(tempList[i].text,tempList[i].id);
    }
}


function init(){
    toDoContainer.addEventListener("submit",handleSubmit);
    loadToDoList();
}

init();