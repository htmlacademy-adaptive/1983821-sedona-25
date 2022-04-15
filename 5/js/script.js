const menu = document.querySelector('.navigation');
const menuBtn = document.querySelector('.navigation__btn');

if(menuBtn) {
  menuBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    menu.classList.toggle('navigation--open');
  })
}
