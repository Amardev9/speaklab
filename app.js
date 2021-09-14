const openNav = document.querySelector('.mobile-nav__toggler');
const overlay = document.querySelector('.overlay');
const closeNav = document.querySelector('.mobile-nav__close');


openNav.addEventListener('click',() => {
   navbarOpenOrClose()
})

closeNav.addEventListener('click',() => {
    navbarOpenOrClose()
})

function navbarOpenOrClose(){
    if(overlay.classList.contains('open'))
        overlay.classList.remove('open')
    else
        overlay.classList.add('open')
}


// Partners slider

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  
  });