import user from "/data/user.js";

/* 로그인된 유저 데이터를 커스텀 gnb 프로퍼티에 set */
const gnb = document.querySelector("custom-gnb");
gnb.user = user;
