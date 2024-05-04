
// const year = document.querySelector('.copyright .year')
// year && (year.innerText = new Date().getFullYear())


document.body.addEventListener('click', (event) => {
  event.stopPropagation()
  submenuClick(event)
})


//Відкриває закриває підменю
function submenuClick(event) {
  const parentElement = event.target.closest('.submenu-click-parent');
  if (parentElement) {
    const button = parentElement.querySelector('.submenu-click');
    const list = parentElement.querySelector('.submenu-click-list');

    button?.classList.toggle('open-click');
    list?.classList.toggle('open-click');

    const isExpanded = button.classList.contains('open-click');
    button.setAttribute('aria-expanded', isExpanded);

    console.log(list)
  }
}

{//розширяє текс в меню на 10%, щоб при наведенні при збільшені тексту не скакало меню
  const items = document.querySelectorAll('.menu-list .menu-item')
  items.forEach((e) => e.style.width = (+e.clientWidth * 1.1) + "px")

}
