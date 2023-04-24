$(document).ready(function(){
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true
  });
});

$(document).ready(function(){
    $('.slick-carousel2').slick({
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          } 
        }
      ]
    });
  });

const container = document.querySelector('.header');
const scrollPosition = 30; 

window.addEventListener('scroll', () => {
  if (window.scrollY > scrollPosition) {
    container.classList.add('act');
  } else {
    container.classList.remove('act');
  }
});

const ret = document.querySelector('.button-return');
const scrollPositionRet = 530; 

window.addEventListener('scroll', () => {
  if (window.scrollY > scrollPositionRet) {
    ret.classList.add('menu');
  } else {
    ret.classList.remove('menu');
  }
});