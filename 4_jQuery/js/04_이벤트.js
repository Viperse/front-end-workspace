// 1. 이벤트 연결
// 1) on, off
/*
$('#area1').on('mouseenter', function(event) {
    // 마우스가 올라갔을 때
    // 배경 색상 : beige, 텍스트는 : 마우스가 올라감
    $('#area1').css({
        'background-color' : 'beige'
    }).html('마우스가 올라감');
});
*/

// mouseleave 함수
// 배경색상 : hotpink, 텍스트는 : 마우스가 내려감
/*
$('#area1').on('mouseleave', function(event) {
    $('#area1').css({
        'background-color' : 'hotpink'
    }).html('마우스가 내려감');
});
*/

/*

$('#area1').on('mouseenter mouseleave', function(event) {
    console.log(event.type);
    if(event.type === 'mouseenter') {
        $('#area1').css({
            'background-color' : 'beige'
        }).html('마우스가 올라감');
    } else if(event.type === 'mouseleave') {
        $('#area1').css({
            'background-color' : 'hotpink'
        }).html('마우스가 내려감');
    }
});
*/

/*
$('#area1').on('click', function(event) {
    // 배경색은 white, 텍스트는 ''
    $(event.target).css('background-color', 'white').html('').off('mouseenter mouseleave');
});
*/

$('#area1').on({
    mouseenter: function(event) {
        $('#area1').css({
            'background-color' : 'beige'
        }).html('마우스가 올라감');
    },

    mouseleave: function(event) {
        $('#area1').css({
            'background-color' : 'hotpink'
        }).html('마우스가 내려감');
    
    },

    click: function(event) {
        $(event.target).css('background-color', 'white').html('').off('mouseenter mouseleave');
    }
});

// 2) one
$('#area2').one('click', function() {
    alert('실행!');
});

// 2. 키보드 이벤트
// 1) keydown, keypress, keyup
// keydown : 키보드가 눌려질 때
// $('#textarea1').keydown(function(e) {
//     console.log(`keydown / e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
// });

// keypress : 글자가 입력될 때
// $('#textarea1').keypress(function(e) {
//     console.log(`keypress / e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
// });

// keyup : 키보드가 떼어질 때
// $('#textarea1').keyup(function(e) {
//     console.log(`keyup / e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
// });

// -> 3가지를 on 메소드로 한번에!
$('#textarea1').on({
    keydown: function(e) {
        console.log(`keydown / e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
    },
    keypress: function(e) {
        console.log(`keypress / e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
    },
    keyup: function(e) {
        console.log(`keyup / e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
    }
})



// substring
console.log("Hello~".substring(0, 1));

// 글자 수 올리기
// 글자 수 50개 넘으면 입력 막기
$('#textarea2').on('keyup', function(e) {

    const maxLength = parseInt($('#maxLength').text());

    if($(e.target).val().length > maxLength) {
        //  글자수 제한! substring!
        $(e.target).val($(e.target).val().substring(0, maxLength));
    } else {
        $('#counter').html($(e.target).val().length);
    }

    // $('#counter').html($(e.target).val().length);
    // if ($(e.target).val().length > 50) {
    //     $(e.target).val($(e.target).val().substring(0, 49));
    // }
});

$('#userId').on('input', function(event) {
    const regEx = /^[a-z][a-z0-9]{4,12}$/;
    const id = $(event.target).val();
    console.log(id === '');
    if(id === '') {
        $('#idCheck').text('');
    } else if(!regEx.test($(event.target).val())) {
        $('#idCheck').css('color', 'red').html('사용 불가능한 아이디입니다.')
    } else {
        $('#idCheck').css('color', 'green').html('사용 가능한 아이디입니다.')
    };
});

/*
let count = 0;
$('#area3').on('click', function() {
    $('#counter2').html(++count);
})
*/

// 3. trigger() 메소드
$('#area3').on('click', function() {
    let currentCount = parseInt($('#counter2').text());
    $('#counter2').text(++currentCount);
});

$('#btn').on('click', function() {
    $('#area3').trigger('click');
})
    