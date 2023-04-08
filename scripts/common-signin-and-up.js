const form = document.querySelector("form");

function addFocusStyle(e) {
  if (e.target.classList.contains("input")) {
    e.target.classList.add("focus-input")
  }
}

function removeFocusStyle(e) {
  if (e.target.classList.contains("input")) {
    e.target.classList.remove("focus-input")
  }
}

form.addEventListener('focusin', addFocusStyle);
form.addEventListener('focusout', removeFocusStyle);