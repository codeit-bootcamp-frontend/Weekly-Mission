import getFolderData from "/api/folder.js";
import getUserData from "/api/user.js";

const cardList = document.querySelectorAll(".card");

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
    const id = link.id ? link.id : null;
    const createdAt = link.createdAt ? link.createdAt : null;
    const url = link.url ? link.url : "https://www.codeit.kr";
    const description = link.description
      ? link.description
      : `Lorem ipsum dolor sit amet consectetur. Metus amet habitant
    nunc consequat. Lorem ipsum dolor sit amet consectetur. Metus
    amet habitant nunc consequat.`;
    const imageSource = link.imageSource
      ? link.imageSource
      : "/shared/public/img1.png";

    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.pid = id;

    card.innerHTML = `
      <a class="link transfer">
        <img class="card-img" src="${imageSource}" />
      </a>
      <div class="star-marks">
        <img class="star" src="public/Star-off.png" />
      </div>
      <div class="text-content">
        <div class="upper">
          <span>${getTimeDiffFormat(createdAt)}</span>
          <img src="public/kebab.png" />
        </div>
        <div class="middle">
          <span>${description}</span>
        </div>
        <div class="time">
          <span>${getDateFormat(createdAt)}</span>
        </div>
      </div>
      `;

    const cardContainer = document.querySelector(".card-container");
    cardContainer.appendChild(card);

    card.addEventListener("click", () => {
      openURL(url);
    });

    const star = card.querySelector(".star");
    star.addEventListener("click", toggleStar);
  });
}

function openURL(url) {
  window.open(url);
}

function getTimeDiffFormat(createdAt) {
  if (!createdAt) {
    return "10 minute ago";
  } else {
    const year = createdAt.slice(0, 4);
    const month =
      createdAt[5] === "0" ? createdAt.slice(6, 7) : createdAt.slice(5, 7);
    const day = createdAt.slice(8, 10);

    const now = new Date();
    const createdDate = new Date(year, month - "1", day);

    const diffMSec = now.getTime() - createdDate.getTime();
    const diffMin = diffMSec / (60 * 1000);
    const diffHour = diffMin / 60;
    const diffDay = diffHour / 24;
    const diffMonth = diffDay / 30;
    const diffYear = diffMonth / 12;

    if (diffYear >= 2) {
      return `${Math.floor(diffYear)} years ago`;
    } else if (diffYear >= 1) {
      return `1 year ago`;
    } else if (diffMonth >= 2) {
      return `${Math.floor(diffMonth)} months ago`;
    } else if (diffMonth >= 1) {
      return `1 month ago`;
    } else if (diffDay >= 2) {
      return `${Math.floor(diffDay)} days ago`;
    } else if (diffDay >= 1) {
      return `1 day ago`;
    } else if (diffHour >= 2) {
      return `${Math.floor(diffHour)} hours ago`;
    } else if (diffHour >= 1) {
      return `1 hour ago`;
    } else if (diffMin >= 2) {
      return `${Math.floor(diffMin)} minutes ago`;
    } else {
      return `1 minute ago`;
    }
  }
}

function getDateFormat(createdAt) {
  if (!createdAt) {
    return "2023. 3. 15";
  } else {
    const year = createdAt.slice(0, 4);
    const month =
      createdAt[5] === "0" ? createdAt.slice(6, 7) : createdAt.slice(5, 7);
    const day =
      createdAt[8] === "0" ? createdAt.slice(9, 10) : createdAt.slice(8, 10);
    return `${year}. ${month}. ${day}`;
  }
}

function toggleStar(e) {
  e.stopPropagation();
  if (e.target.classList.contains("selected")) {
    e.target.src = "/shared/public/Star-off.png";
    e.target.classList.remove("selected");
  } else {
    e.target.src = "/shared/public/Star-on.png";
    e.target.classList.add("selected");
  }
}

renderCards();
