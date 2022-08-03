const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 24,
  centerPadding: '100px',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper2 = new Swiper('.feature__swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  spaceBetween: 24,
  centerPadding: '100px',
  navigation: {
    nextEl: '.features__section__header__next',
    prevEl: '.features__section__header__prev',
  },
});
