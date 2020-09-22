const toDoContainer = document.querySelector(".js-form-toDoInput");
const toDoInputText = toDoContainer.querySelector("input");

const toDoListContainer = document.querySelector(".js-div-toDoList");

let toDoList =[];

let max_length =0; // 중복 id를 막기위한 상수


function deleteToDo(event){
    const target_li = event.target.parentNode;
    toDoListContainer.removeChild(target_li);
    const temp_todoList = toDoList.filter(function(toDo){
        return toDo.id !== parseInt(target_li.id);
    })
    toDoList = temp_todoList;
    saveToDoList();
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
    btn.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(btn);
    toDoListContainer.appendChild(li);
}


function pushToDoLIst(text){
    const id = max_length;
    const toDoListObj = {
        text : text,
        id : id
    }
    toDoList.push(toDoListObj);
    saveToDoList();
    paintNewList(text,id);
    max_length++;
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
        pushToDoLIst(tempList[i].text);
    }
}


function init(){
    toDoContainer.addEventListener("submit",handleSubmit);
    loadToDoList();
}

init();