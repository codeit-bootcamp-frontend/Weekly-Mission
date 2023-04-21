const cardList = document.querySelectorAll(".card");

// 1. 카드에 mouseover시 배경색 바꾸고 이미지 확대//
function changeBackground(event) {
  const txtContent = event.currentTarget.children[2];
  txtContent.style.backgroundColor = "#F0F6FF";
}

function resetBackground(event) {
  const txtContent = event.currentTarget.children[2];
  txtContent.style.backgroundColor = "#FFFFFF";
}

function zoomIn(event) {
  const imgContent = event.currentTarget.children[0];
  imgContent.style.transform = "scale(1.2)";
  imgContent.style.transition = "all  0.2s linear";
  imgContent.style.objectFit = "cover";
}

function zoomOut(event) {
  const imgContent = event.currentTarget.children[0];
  imgContent.style.transform = "scale(1)";
}

for (let i = 0; i < cardList.length; i++) {
  const currentCard = cardList[i];
  currentCard.addEventListener("mouseover", changeBackground);

  currentCard.addEventListener("mouseover", zoomIn);

  currentCard.addEventListener("mouseout", resetBackground);

  currentCard.addEventListener("mouseout", zoomOut);
}

//1 끝//

//2. 별 클릭시 바뀌기//

const starDefault = document.querySelectorAll(".star.default");

const starHidden = document.querySelectorAll(".star.hidden");

function onoff(e) {
  e.target.classList.toggle("off");
}

function blue(e) {
  e.target.nextElementSibling.classList.toggle("off");
}

function noColor(e) {
  e.target.previousElementSibling.classList.toggle("off");
}

for (let i = 0; i < cardList.length; i++) {
  const currentStar = starDefault[i];
  currentStar.addEventListener("click", onoff);
  currentStar.addEventListener("click", blue);

  const blueStar = starHidden[i];
  blueStar.addEventListener("click", onoff);
  blueStar.addEventListener("click", noColor);
}

// 2 끝 //
