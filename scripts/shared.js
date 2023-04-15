const cardContainer = document.querySelector(".card-container");

function handelClickCard(e) {
  if (e.target.className !== "card-container") {
    window.open("https://www.codeit.kr");
  }
}

cardContainer.addEventListener("click", handelClickCard);
