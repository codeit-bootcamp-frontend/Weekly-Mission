import getFolderData from "/api/folder.js";
import getUserData from "/api/user.js";

const cardList = document.querySelectorAll(".card");

// 카드 영역 누르면 코드잇 페이지로 이동 //
const aTags = document.querySelectorAll(".transfer");

function goToCodeit() {
  window.location.href = "https://www.codeit.kr";
}

aTags.forEach((aTag) => {
  aTag.addEventListener("click", goToCodeit);
});

// 끝 //

// 카드에 mouseover시 배경색 바꾸고 이미지 확대//
function changeBackground(event) {
  const txtContent = event.currentTarget.children[2].children[0];
  txtContent.style.backgroundColor = "#F0F6FF";
}

function resetBackground(event) {
  const txtContent = event.currentTarget.children[2].children[0];
  txtContent.style.backgroundColor = "#FFFFFF";
}

function zoomIn(event) {
  const imgContent = event.currentTarget.children[0].firstElementChild;
  imgContent.style.transform = "scale(1.2)";
  imgContent.style.transition = "all  0.2s linear";
  imgContent.style.objectFit = "cover";
}

function zoomOut(event) {
  const imgContent = event.currentTarget.children[0].children[0];
  imgContent.style.transform = "scale(1)";
}

for (let i = 0; i < cardList.length; i++) {
  const currentCard = cardList[i];
  currentCard.addEventListener("mouseover", changeBackground);

  currentCard.addEventListener("mouseover", zoomIn);

  currentCard.addEventListener("mouseout", resetBackground);

  currentCard.addEventListener("mouseout", zoomOut);
}

//끝//

// 별 클릭시 바뀌기//

const starDefault = document.querySelectorAll(".star.default");

const starHidden = document.querySelectorAll(".star.hidden");

function onoff(e) {
  e.target.classList.toggle("off");
}

function blue(e) {
  e.currentTarget.nextElementSibling.classList.toggle("off");
}

function noColor(e) {
  e.currentTarget.previousElementSibling.classList.toggle("off");
}

for (let i = 0; i < cardList.length; i++) {
  const currentStar = starDefault[i];
  currentStar.addEventListener("click", onoff);
  currentStar.addEventListener("click", blue);

  const blueStar = starHidden[i];
  blueStar.addEventListener("click", onoff);
  blueStar.addEventListener("click", noColor);
}

// 끝 //

//gnb api 데이터 적용//

async function renderGnb() {
  try {
    const { data } = await getUserData();
    const { email, profileImageSource } = data;
    const account = document.querySelector(".email");
    account.textContent = email;

    const img = document.querySelector(".profile-img");
    img.src = profileImageSource;
  } catch {
    console.log("user데이터를 불러올 수 없습니다.");
    const account = document.querySelector(".account");
    account.outerHTML = `
      <div>
        <a class="login-btn" href="signin.html"> 로그인 </a>
      </div>
    `;
  }
}

renderGnb();

// 끝 //

// Header api 데이터 적용 //
async function renderHeader() {
  try {
    const { data } = await getFolderData();
    const { folder } = data;
    const { name, owner } = folder;
    const { name: profileName, profileImageSource } = owner;

    const headerImg = document.querySelector(".header-img");
    headerImg.src = profileImageSource;

    const user = document.querySelector(".user");
    user.textContent = `@${profileName}`;

    const headerTitle = document.querySelector(".header-title");
    headerTitle.textContent = name;
  } catch {
    console.log("folder의 데이터를 불러올 수 없습니다.");
  }
}

renderHeader();

// 끝 //

//card api 데이터 적용 //

async function renderCards() {
  const { data } = await getFolderData();
  const { folder } = data;
  const { links } = folder;

  links.forEach((link) => {
    const { id, createdAt, url, title, description, imageSource } = link;
  });
}

renderCards();
