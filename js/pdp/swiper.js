var swiper1 = new Swiper('.products__swiper1', {
  spaceBetween: 30,
  slidesPerView: 1.3,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1400: {
      slidesPerView: 3.3,
    },
    800: {
      slidesPerView: 2,
    },
  },
});

var swiper2 = new Swiper('.customer-swiper', {
  spaceBetween: 30,
  slidesPerView: 1.3,
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next-customer',
    prevEl: '.swiper-button-prev-customer',
  },
  breakpoints: {
    1400: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 2,
    },
  },
});

var swiper3 = new Swiper('.swiper__gallary', {
  slidesPerView: 1,
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next-gallary',
    prevEl: '.swiper-button-prev-gallary',
  },
  pagination: {
    el: '.swiper-pagination-gallary',
    type: 'bullets',
  },
});
