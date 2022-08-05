const production__list = [
  {
    id: 1,
    status: 'NEW',
    image: '/assets/imgs/products-img1',
    descript: 'Your Skin But Better CC+ Cream with SPF50 12ml ',
    price: 28.0,
  },
  {
    id: 2,
    status: 'SALE',
    image: '/assets/imgs/products-img2',
    descript: 'KEM DUONG VT CICA - VT CICA CREAM',
    price: '28.00',
    off: '32.00',
  },
  {
    id: 3,
    image: '/assets/imgs/products-img3',
    descript: 'Niche Beauty CCC Cream - Niche Beauty',
    price: '28.00',
  },
  {
    id: 4,
    status: 'NEW',
    image: '/assets/imgs/products-img1',
    descript: 'Your Skin But Better CC+ Cream with SPF50 12ml ',
    price: '28.00',
  },
  {
    id: 5,
    status: 'SOLD',
    image: '/assets/imgs/products-img2',
    descript: 'Your Skin But Better CC+ Cream with SPF50 12ml ',
    price: '28.00',
  },
  {
    id: 6,
    status: 'LEFT',
    image: '/assets/imgs/products-img3',
    descript: 'Your Skin But Better CC+ Cream with SPF50 12ml ',
    price: '28.00',
  },
];

let sliderContainer = document.getElementById('container');

// const mappedProducts = production__list.map((product, index) => {
//   return `
//   <div  key=${index}>
//   <div class="section__products__item__view">
//     <div class="section__products__item__status">${product.status}</div>
//     <img
//       src=${product.image}
//       class="section__products__item__image"
//     />
//     <div class="section__products__item__footer">
//       <a href="/"> + Quick Shop </a>
//     </div>
//   </div>
//   <div class="section__products__item__description">
//     <h4 class="section__products__item__title">
//     ${product.descript}
//     </h4>
//     <h4 class="price">${product.price}  <span>${
//     product?.off && product?.off
//   }</span></h4>
//   </div>
// </div> `;
// });

// sliderContainer.innerHTML = mappedProducts;
