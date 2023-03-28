window.addEventListener('scroll', () => {
  const $navBar = document.querySelector('nav');
  if (window.scrollY > 0) {
    $navBar.classList.add('floating-nav');
  } else {
    $navBar.classList.remove('floating-nav');
  }
});
