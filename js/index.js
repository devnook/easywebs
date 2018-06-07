function resizeHeaderOnScroll() {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop;
  const stickyOn = 400;
  const headerEl = document.getElementById('header');
  headerEl.classList.toggle('sticky', distanceY > stickyOn);
}

window.addEventListener('scroll', resizeHeaderOnScroll);
