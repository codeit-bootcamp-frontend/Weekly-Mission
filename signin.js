const $tooglePassword = document.querySelector('.toggle-password')
const $userEmail = document.querySelector('.userEmail')
const $userPassword = document.querySelector('.userPassword')
const $loginForm = document.querySelector('#login-form')


//비밀번호를 확인할 수 있는 아이콘 클릭시 비밀번호의 문자열이 보이기도 하고, 가려지기도 합니다.
function tooglePassword() {
    if ($userPassword.type === "password") {
        $userPassword.type = "text";
    } else {
        $userPassword.type = "password";
    }
  }

/* 1.이메일 input에서 focus out 일 때, 값이 없을 경우 alert으로 “이메일을 입력해주세요.” 메세지를 보입니다.
   2.이메일 input에서 focus out 일 때, 값이 있고, 이메일 형식에 맞지 않을 경우 alert으로 “올바른 이메일 주소가 아닙니다.” 메세지를 보입니다. */
function verifyEmail(e){
    let target = e.target.value;
    let regex = new RegExp("^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");

    if(!target){
        alert('이메일을 입력해주세요.')
    }
    else if(!regex.test(target)){
        alert('올바른 이메일 주소가 아닙니다.')
    }
}

function verifyLogininfo(e){
    e.preventDefault();
    const trueEmail = 'test@codeit.com';
    const truePw = 'codeit101';
    if($userEmail.value===trueEmail && userPassword.value===truePw){
        location.href = "./my-link.html";
    }
    else{
        alert('이메일과 비밀번호를 확인해주세요.');
    }
};

$tooglePassword.addEventListener('click', tooglePassword);
$userEmail.addEventListener('focusout', verifyEmail);
$loginForm.addEventListener('submit', verifyLogininfo);
