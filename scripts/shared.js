const cardContainer = document.querySelector(".card-container");

function handelClickCard(e) {
  const classLi = e.target.classList;
  if (classLi.contains("star")) {
    if (classLi.toggle("star-favor")) {
      e.target.src = "./images/purple-star.png";
      e.target.alt = "별(즐겨찾기)";
    } else {
      e.target.src = "./images/gray-star.png";
      e.target.alt = "별(일반)";
    }
  } else if (!classLi.contains("card-container")) {
    open("https://www.codeit.kr");
  }
}

cardContainer.addEventListener("click", handelClickCard);
