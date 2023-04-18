const eyeContainer = document.querySelector('.eye-container');
const togglers = document.querySelectorAll('.input-container i');

eyeContainer.addEventListener("mousedown", function(e){
  e.preventDefault();
})

function passwordToggle(e) {
  const toggleIcon = e.target;
  const inputTag = e.target.parentElement.previousElementSibling;
  if (inputTag.type === 'password') {
    inputTag.setAttribute('type','text');
    toggleIcon.classList.remove('fa-eye-slash');
  } else {
    inputTag.setAttribute('type','password');
    toggleIcon.classList.add('fa-eye-slash');
  }
  e.preventDefault();
}

togglers.forEach(element => element.addEventListener('mousedown', passwordToggle));
