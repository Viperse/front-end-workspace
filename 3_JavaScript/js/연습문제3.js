const btnClick = document.querySelector('.click');
const btnRestart = document.querySelector('.restart');
const imgList = document.querySelectorAll('.main-image img');
const result = document.querySelector('.main-result');
const span = document.querySelector('.click span');
let count = 0;
const p = document.createElement("p");



function clickHandler() {

    span.innerHTML = ++count;

    let random1 = Math.floor(Math.random() * 3) + 1;
    let random2 = Math.floor(Math.random() * 3) + 1;
    let random3 = Math.floor(Math.random() * 3) + 1;

    const random = [
        Math.floor(Math.random() * 3) + 1,
        Math.floor(Math.random() * 3) + 1,
        Math.floor(Math.random() * 3) + 1
    ];

    for(let i=0; i<imgList.length; i++) {
        imgList[i].setAttribute("src", `../../resources/spy${random[i]}.jpg`);
    }

    if(imgList[0].getAttribute("src")===imgList[1].getAttribute("src") &&
    imgList[1].getAttribute("src")===imgList[2].getAttribute("src")) {

        result.innerHTML = "승리!";
        btnClick.setAttribute("disabled", "disabled");
    }

}

function restartHandler() {

    btnClick.disabled = false;
    count = 0;
    span.innerHTML = "";

    for(let i=0; i<imgList.length; i++) {
        imgList[i].setAttribute("src", "../../resources/spy1.jpg");
    }

    result.innerHTML = "";
}


btnClick.addEventListener('click', clickHandler);
btnRestart.addEventListener('click', restartHandler);