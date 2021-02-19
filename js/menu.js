export default function Menu() {
  const btnCloseMenu = document.querySelector('.btnFechar');
  const btnOpenMenu = document.querySelector('.btnMenu');
  const menu = document.querySelector('.menuContent');
  const listaMenu = document.querySelectorAll('.menuContent ul li');
  const body = document.querySelector('body');

  const menuOpen = (event) => {
    event.preventDefault();
    menu.classList.add('activeMenu');
    body.classList.add('scroll');
  };

  const menuOff = () => {
    menu.classList.remove('activeMenu');
    body.classList.remove('scroll');
  };

  btnOpenMenu.addEventListener('click', menuOpen);
  btnCloseMenu.addEventListener('click', menuOff);

  // Sumir o menu quando algum item for escolhido
  listaMenu.forEach((item) => {
    item.addEventListener('click', menuOff);
  });
}
