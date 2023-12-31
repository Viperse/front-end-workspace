let maxScrollValue;
const progressbar = document.querySelector('.progress-bar');

function resizeHandler() {
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
    // 전체 스크롤 할 수 있는 범위 = 바디 전체 높이 - 윈도우 현재 창의 높이
}

window.addEventListener('scroll', function() {

    let wid = (window.scrollY / maxScrollValue) * 100;
    progressbar.style.width = wid + '%';

});

window.addEventListener('resize', resizeHandler());
resizeHandler();

// navigation click event
const nav = document.querySelector('nav');

let current;

function navHandler(event) {

    if(current) {
        current.style.backgroundColor = 'transparent';
        current.style.color = 'black';
    }
    if(event.target!==event.currentTarget) {
        event.target.style.backgroundColor = 'black';
        event.target.style.color = 'white';
        current = event.target;
    }
}

nav.addEventListener('click', navHandler);

// mouse wheel event
const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');

let currentSection = section1;

window.addEventListener('wheel', function(event) {
    if(event.deltaY > 0) { // 휠을 아래로 내린 경우
        if(currentSection == section1) {
            window.scrollTo({top: section2.offsetTop, behavior: 'smooth'});
            currentSection = section2;
        } else if(currentSection === section2) {
            window.scrollTo({top: section3.offsetTop, behavior: 'smooth'});
            currentSection = section3;
        }
    } else { // 휠을 위로 올린 경우
        if(currentSection === section3) {
            this.window.scrollTo({top: section2.offsetTop, behavior: 'smooth'});
            currentSection = section2;
        } else if(currentSection === section2) {
            this.window.scrollTo({top: section1.offsetTop, behavior: 'smooth'});
            currentSection = section1;
        }
    }
});

// scroll - animation 살짝
window.addEventListener('scroll', function() {
    if(section1.getBoundingClientRect().top === 0) {
        section1.children[0].classList.add('text-animation');
        section1.children[1].classList.add('text-animation');
    } else {
        section1.children[0].classList.remove('text-animation');
        section1.children[1].classList.remove('text-animation')
    }

    if(section2.getBoundingClientRect().top === 0) {
        section2.children[0].classList.add('text-animation');
        section2.children[1].classList.add('text-animation')
    } else {
        section2.children[0].classList.remove('text-animation');
        section2.children[1].classList.remove('text-animation');
    }

    if(section3.getBoundingClientRect().top === 0) {
        section3.children[0].classList.add('text-animation');
        section3.children[1].classList.add('text-animation');
    } else {
        section3.children[0].classList.remove('text-animation');
        section3.children[1].classList.remove('text-animation');
    }
});
