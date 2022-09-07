const toggleBtn = document.querySelector('.header');
const menu = document.querySelector('.headerlist');


toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});