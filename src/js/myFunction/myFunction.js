
// const year = document.querySelector('.copyright .year')
// year && (year.innerText = new Date().getFullYear())
import $ from 'jquery';


// //Відкриває закриває підменю
; (() => {
  const button = $('.menu-link.submenu-click')

  //when you click on outside the menu, close the menu
  $(document).on('click', function (e) {
    const rez = $(e.target).closest('.menu-item.submenu-click-parent')
    rez.length === 0 && $('.submenu-click-list').removeClass('open-click')
  })

  //when you press esc close the menu
  $(document).on('keydown', function (event) {
    if (event.keyCode === 27) {
      $('.submenu-click-list').removeClass('open-click')
    }
  });


  //open close under the menu
  button.on('click', function (el) {
    el.stopPropagation()
    const clickedButton = this
    button.each(function (_, e) {
      const list = $(e).closest('.submenu-click-parent').find('.submenu-click-list')
      if (clickedButton == e) {
        $(e).toggleClass('open-click')
        $(list).toggleClass('open-click')
      } else {
        $(e).removeClass('open-click')
        $(list).removeClass('open-click')
      }
    })
  })
})()




  //розширяє текс в меню на 10%, щоб при наведенні при збільшені тексту не скакало меню
  //expands the text in the menu by 10%, so that when you hover over the text when you increase the text, the menu does not jump

  ; (function () {
    $('.menu-list .menu-item').each(function () {
      $(this).width($(this).width() * 1.1);
    });
  })()



