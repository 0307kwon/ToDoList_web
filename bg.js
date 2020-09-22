const body = document.querySelector("body");
const image = new Image();

const IMAGE_NUM = 3; // 이미지 갯수

function genRandom(){
    const t = Math.floor(Math.random()*IMAGE_NUM+1);
    console.log(t);
    return t;
}

function loadEndImage(){
    body.appendChild(image);
}

function paintImage(random_num){
    image.src = `images/${random_num}.jpg`;
    image.classList.add("bgImage");
    
    image.addEventListener("load",loadEndImage);

    
}

function init(){
    const random_num = genRandom();
    paintImage(random_num);
}

init();