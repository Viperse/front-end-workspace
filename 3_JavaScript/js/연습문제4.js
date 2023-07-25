const userId = document.querySelector('#userId');
const userPwd1 = document.querySelector('#userPwd1');
const userPwd2 = document.querySelector('#userPwd2');
const userName = document.querySelector('#userName');
const email = document.querySelector('#email');

function userIdCheck() {
    const regExp = /^[a-zA-Z][a-zA-Z0-9]{3,11}$/;
    return regExp.test(userId.value);
}

function userPwd1Check() {
    const regExp = /^[!-~]{8,15}$/;
    const regExp2 = /[!-/:-@[-`{-~]/;
    return regExp.test(userPwd1.value) && regExp2.test(userPwd1.value);
}

function userPwd2Check() {
    return userPwd1.value == userPwd2.value;
}

function userNameCheck() {
    const regExp = /^[가-힣]{2,}$/;
    return regExp.test(userName.value);
}

function emailCheck() {
    const regExp = /^[\w\.]+@[a-z]+\.[a-z]+$/;
    return regExp.test(email.value);
}

function validate() {
    if(!userIdCheck()) {
        userId.focus();
        return false;
    } else if(!userPwd1Check()) {
        userPwd1.focus();
        return false;
    } else if(!userPwd2Check()) {
        userPwd2.focus();
        return false;
    } else if(!userNameCheck()) {
        userName.focus();
        return false;
    } else if(!emailCheck()) {
        email.focus();
        return false;
    }

}

function inputHandler(event, check, message) {

    if(!check) {
        event.target.nextElementSibling.style.color = 'red';
        event.target.nextElementSibling.innerHTML = message;

    } else {
        event.target.nextElementSibling.style.color = 'green';
        event.target.nextElementSibling.innerHTML = 'ok!';
    }
    
}

userId.addEventListener('input', function(event) {
    inputHandler(event, userIdCheck(), '첫 글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 총 4~12자로 입력하시오.');
})

userPwd1.addEventListener('input', function(event) {
    inputHandler(event, userPwd1Check(), '영문자, 숫자, 특수문자 포함하여 총 8~15자로 입력하시오.');
    
})

userPwd2.addEventListener('input', function(event) {
    inputHandler(event, userPwd2Check(), '비밀번호가 일치하지 않습니다.');
});

userName.addEventListener('input', function(event) {
    inputHandler(event, userNameCheck(), '한글로 입력하시오.');
})

email.addEventListener('input', function(event) {
    inputHandler(event, emailCheck(), '이메일을 다시 작성하시오.')
})


