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
