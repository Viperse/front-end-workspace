// window.addEventListener('DOMContentLoaded', function() {
//     const h1 = document.querySelector("h1");
//     console.log(h1);
// }); // window가 가장 상위 함수기 때문에 window에 이벤트를 걸면 script를 위에 넣어도 정상적으로 실행됨

const h1 = document.querySelector("h1");
h1.addEventListener('mouseenter', function() {
    h1.style.backgroundColor = "skyblue";
});

// const div1 = document.querySelector(".container img:nth-child(1)");
// const div2 = document.querySelector(".container img:nth-child(2)");
// const div3 = document.querySelector(".container img:nth-child(3)");
// const div4 = document.querySelector(".container img:nth-child(4)");
// const div5 = document.querySelector(".container img:nth-child(5)");


// imgList[0].addEventListener('click', function() {
//     // div1.style.visibility = 'hidden';
//     imgList[0].style.display = "none";
// });


// imgList[1].addEventListener('click', function() {
//     imgList[1].style.display = "none";
// });


// imgList[2].addEventListener('click', function() {
//     imgList[2].style.display = "none";
// });


// imgList[3].addEventListener('click', function() {
//     imgList[3].style.display = "none";
// });


// imgList[4].addEventListener('click', function() {
//     imgList[4].style.display = "none";
// });

// const imgList = document.querySelectorAll(".container img");

const container = document.querySelector('.container');

function removeHandler(event) { // 이벤트 핸들러로 쓰는 함수는 이벤트 객체가 숨겨져 있다
    console.log(event.currentTarget);
    if(event.target !== event.currentTarget) {
        event.target.style.display = 'none';
    }
}

// for(let i=0; i<imgList.length; i++) {
//     imgList[i].addEventListener('click', removeHandler);
// }

container.addEventListener('click', removeHandler);
