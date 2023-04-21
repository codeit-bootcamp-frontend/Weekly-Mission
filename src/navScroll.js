document.addEventListener("DOMContentLoaded", () => {
  let prevScrollpos = window.scrollY;
  const navElem = document.querySelector("#nav-wrapper");
  const headerElem = document.querySelector("header");
  let navHeight = navElem.offsetHeight;

  window.addEventListener("scroll", () => {
    let currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
      headerElem.style.top = "0";
      headerElem.classList.add("shadow");
    } else {
      headerElem.style.top = "-" + navHeight + "px";
      headerElem.classList.remove("shadow");
    }

    if (currentScrollPos == 0) {
      headerElem.classList.remove("shadow");
    }
    prevScrollpos = currentScrollPos;
  });
});
