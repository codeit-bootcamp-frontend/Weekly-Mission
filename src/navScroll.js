document.addEventListener("DOMContentLoaded", () => {
  let prevScrollpos = window.scrollY;
  const navElem = document.querySelector("#nav-wrapper");
  const headerElem = document.querySelector("header");

  window.addEventListener("scroll", () => {
    let navHeight = window
      .getComputedStyle(navElem, null)
      .getPropertyValue("height");

    let currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
      headerElem.style.top = "0";
      headerElem.classList.add("shadow");
    } else {
      headerElem.style.top = "-" + navHeight;
      headerElem.classList.remove("shadow");
    }

    if (currentScrollPos == 0) {
      headerElem.classList.remove("shadow");
    }
    prevScrollpos = currentScrollPos;
  });
});
