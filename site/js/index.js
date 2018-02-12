function resizeHeaderOnScroll() {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop;
  const stickyOn = 500;
  const headerEl = document.getElementById('hero-shadow');
  headerEl.classList.toggle('sticky', distanceY > stickyOn);
}

window.addEventListener('scroll', resizeHeaderOnScroll);
