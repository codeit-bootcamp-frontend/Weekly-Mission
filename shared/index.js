const stars = document.querySelectorAll(".star-icon");

function toggleStarIcon(e) {
  if (e.target.classList.contains("selected-star")) {
    e.target.classList.remove("selected-star");
    e.target.src = "/images/default-star.svg";
  } else {
    e.target.classList.add("selected-star");
    e.target.src = "/images/selected-star.svg";
  }
}

stars.forEach((star) => {
  star.addEventListener("click", toggleStarIcon);
});
