// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,
//   slidesPerView: 1.3,
//   spaceBetween: 24,
//   centerPadding: '100px',

//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   breakpoints: {
//     1400: {
//       slidesPerView: 3.2,
//     },
//     800: {
//       slidesPerView: 2,
//     },
//   },
// });

// const feature__swiper = new Swiper('.feature__swiper', {
//   direction: 'horizontal',
//   loop: true,
//   // slidesPerView: 1,
//   navigation: {
//     nextEl: '.header__next',
//     prevEl: '.controller__prev',
//   },
// });

// const perfume__swiper = new Swiper('.perfume__swiper', {
//   direction: 'horizontal',
//   loop: true,
//   slidesPerView: 4,
//   // spaceBetween: 24,
//   // centerPadding: '100px',
//   navigation: {
//     nextEl: '.perfume__next',
//     prevEl: '.perfume__prev',
//   },
// });

var swiper1 = new Swiper('.swiper1', {
  spaceBetween: 30,
  slidesPerView: 1.3,
  pagination: {
    el: '.swiper-pagination1',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1400: {
      slidesPerView: 3.2,
    },
    800: {
      slidesPerView: 2,
    },
  },
});
var swiper2 = new Swiper('.swiper2', {
  slidesPerView: 4,
  pagination: {
    el: '.swiper-pagination2',
    clickable: true,
  },

  breakpoints: {
    1400: {
      slidesPerView: 'auto',
    },
    800: {
      slidesPerView: 'auto',
    },
  },
});
var swiper3 = new Swiper('.swiper3', {
  slidesPerView: 1.3,
  spaceBetween: 30,

  navigation: {
    nextEl: '.swiper3__next',
    prevEl: '.swiper3__prev',
  },

  breakpoints: {
    1000: {
      slidesPerView: 2.3,
    },
  },
});
