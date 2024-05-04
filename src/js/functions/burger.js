import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';

// (function(){
//   const burger = document?.querySelector('[data-burger]');
//   const menu = document?.querySelector('[data-menu]');
//   const menuItems = document?.querySelectorAll('[data-menu-item]');
//   const overlay = document?.querySelector('[data-menu-overlay]');

//   burger?.addEventListener('click', (e) => {
//     burger?.classList.toggle('burger--active');
//     menu?.classList.toggle('menu--active');

//     if (menu?.classList.contains('menu--active')) {
//       burger?.setAttribute('aria-expanded', 'true');
//       burger?.setAttribute('aria-label', 'Закрыть меню');
//       disableScroll();
//     } else {
//       burger?.setAttribute('aria-expanded', 'false');
//       burger?.setAttribute('aria-label', 'Открыть меню');
//       enableScroll();
//     }
//   });

//   overlay?.addEventListener('click', () => {
//     burger?.setAttribute('aria-expanded', 'false');
//     burger?.setAttribute('aria-label', 'Открыть меню');
//     burger.classList.remove('burger--active');
//     menu.classList.remove('menu--active');
//     enableScroll();
//   });

//   menuItems?.forEach(el => {
//     el.addEventListener('click', () => {
//       burger?.setAttribute('aria-expanded', 'false');
//       burger?.setAttribute('aria-label', 'Открыть меню');
//       burger.classList.remove('burger--active');
//       menu.classList.remove('menu--active');
//       enableScroll();
//     });
//   });
// })();

(function burger() {
  const burger = document?.querySelector('[data-burger]')
  const menu = document?.querySelector('[data-menu]')
  const menuItems = document?.querySelectorAll('[data-menu-item]')
  const overlay = document?.querySelector('[data-menu-overlay1]')

  document.body.addEventListener('click', e => {
    if (!e.target.closest('.header__menu') && !e.target.closest('.burger')) {
      menu.classList.contains('menu--active') && hiddenMenu()
    }
  })

  document.addEventListener('keydown', function (event) {
    if (event.code == 'Escape') {
      menu.classList.contains('menu--active') && hiddenMenu()
    }
  });

  burger?.addEventListener('click', (e) => {
    e.stopPropagation()
    burger?.classList.toggle('burger--active')
    menu?.classList.toggle('menu--active')
    overlay?.classList.toggle('overlay--active')

    if (menu?.classList.contains('menu--active')) {
      burger?.setAttribute('aria-expanded', 'true')
      burger?.setAttribute('aria-label', 'Закрыть меню')
      // disableScroll()
    } else {
      burger?.setAttribute('aria-expanded', 'false')
      burger?.setAttribute('aria-label', 'Открыть меню')
      // enableScroll()
    }
  })

  overlay?.addEventListener('click', (e) => {
    e.stopPropagation()
    hiddenMenu()
  })

  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      hiddenMenu()
    })
  })

  function hiddenMenu() {
    burger?.setAttribute('aria-expanded', 'false')
    burger?.setAttribute('aria-label', 'Открыть меню')
    burger.classList.remove('burger--active')
    menu.classList.remove('menu--active')
    overlay?.classList.remove('overlay--active')
    // enableScroll()
  }
})()

// burger()



