document.querySelector('.menu-btn').addEventListener('click', function () {
  document.querySelector('.nav').classList.add('visible');
});

document.querySelector('.nav-close').addEventListener('click', function () {
  document.querySelector('.nav').classList.remove('visible');
});