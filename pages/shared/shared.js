import { GlobalNavigationBar } from '../../components/tony-gnb.js';
import { Card } from '/components/tony-card.js';
const user = document.querySelector('.user');
const container = document.querySelector('.container');
const body = document.querySelector('body');

// 유저 정보 요청
async function getUser() {
  const response = await fetch(
    'https://bootcamp-api.codeit.kr/api/sample/user'
  );
  const result = await response.json();
  const data = result.data;
  body.prepend(new GlobalNavigationBar(data));
}

// 카드 정보 요청
async function getSharedInfo() {
  const response = await fetch(
    'https://bootcamp-api.codeit.kr/api/sample/folder'
  );
  const result = await response.json();
  const data = result.data.folder;
  console.log(data);

  user.innerHTML = `
  <img class="icon" src="/pictures/Avatar.png" />
  <p class="user-name">${data.owner.name}</p>
  <p class="favorite">${data.name}</p>
  `;

  data.links.forEach((link) => {
    container.appendChild(new Card(link));
  });
}

getUser();
getSharedInfo();
