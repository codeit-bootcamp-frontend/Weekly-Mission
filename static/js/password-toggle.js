const eyeContainer = document.querySelector('.eye-container');
const togglers = document.querySelectorAll('.input-container i');

eyeContainer.addEventListener("mousedown", function(e){
  e.preventDefault();
})

function passwordToggle(e) {
  if (e.target.parentElement.previousElementSibling.type === 'password') {
    e.target.parentElement.previousElementSibling.setAttribute('type','text');
    e.target.classList.remove('fa-eye-slash');
  } else {
    e.target.parentElement.previousElementSibling.setAttribute('type','password');
    e.target.classList.add('fa-eye-slash');
  }
  e.preventDefault();
}

togglers.forEach(element => element.addEventListener('mousedown', passwordToggle));
