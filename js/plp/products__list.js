const production__list = [
  {
    id: 1,
    status: 'NEW',
    image: '/assets/imgs/products-img1',
    descript: 'Your Skin But Better CC+ Cream with SPF50 12ml ',
    price: 28.0,

    show: true,
  },
  {
    id: 2,
    status: 'SALE',
    image: '/assets/imgs/products-img2',
    descript: 'KEM DUONG VT CICA - VT CICA CREAM',
    price: '28.00',
    off: '32.00',
    show: true,
  },
  {
    id: 3,
    status: 'SALE',
    image: '/assets/imgs/products-img3',
    descript: 'Niche Beauty CCC Cream - Niche Beauty',
    price: '28.00',
    show: true,
  },
  {
    id: 4,
    status: 'NEW',
    image: '/assets/imgs/products-img1',
    descript: 'Your Skin But Better CC+ Cream with SPF50 12ml ',
    price: '28.00',
    show: true,
  },
  {
    id: 5,
    status: 'SOLD',
    image: '/assets/imgs/products-img2',
    descript: 'Your Skin But Better CC+ Cream with SPF50 12ml ',
    price: '28.00',
    show: true,
  },
  {
    id: 6,
    status: 'LEFT',
    image: '/assets/imgs/products-img3',
    descript: 'Your Skin But Better CC+ Cream with SPF50 12ml ',
    price: '28.00',
    show: true,
  },
  {
    id: 7,
    status: 'NEW',
    image: '/assets/imgs/products-img1',
    descript: 'Your Skin But Better CC+ Cream with SPF50 12ml ',
    price: 28.0,
    ads: true,
    show: true,
  },
  {
    id: 7,
    status: 'NEW',
    image: '/assets/imgs/products-img1',
    descript: 'Your Skin But Better CC+ Cream with SPF50 12ml ',
    price: 28.0,
    show: true,
  },
  {
    id: 8,
    status: 'SALE',
    image: '/assets/imgs/products-img2',
    descript: 'KEM DUONG VT CICA - VT CICA CREAM',
    price: '28.00',
    off: '32.00',
    show: true,
  },
  {
    id: 9,
    status: 'SALE',
    image: '/assets/imgs/products-img3',
    descript: 'Niche Beauty CCC Cream - Niche Beauty',
    price: '28.00',
    show: true,
  },
  {
    id: 10,
    status: 'NEW',
    image: '/assets/imgs/products-img1',
    descript: 'Your Skin But Better CC+ Cream with SPF50 12ml ',
    price: '28.00',
    show: true,
  },
  {
    id: 11,
    status: 'SOLD',
    image: '/assets/imgs/products-img2',
    descript: 'Your Skin But Better CC+ Cream with SPF50 12ml ',
    price: '28.00',
    show: true,
  },
  {
    id: 12,
    status: 'LEFT',
    image: '/assets/imgs/products-img3',
    descript: 'Your Skin But Better CC+ Cream with SPF50 12ml ',
    price: '28.00',
    show: true,
  },
  {
    id: 10,
    status: 'NEW',
    image: '/assets/imgs/products-img1',
    descript: 'Your Skin But Better CC+ Cream with SPF50 12ml ',
    price: '28.00',
    show: true,
  },
  {
    id: 11,
    status: 'SOLD',
    image: '/assets/imgs/products-img2',
    descript: 'Your Skin But Better CC+ Cream with SPF50 12ml ',
    price: '28.00',
    show: true,
  },
  {
    id: 12,
    status: 'LEFT',
    image: '/assets/imgs/products-img3',
    descript: 'Your Skin But Better CC+ Cream with SPF50 12ml ',
    price: '28.00',
    show: true,
  },
  {
    id: 10,
    status: 'NEW',
    image: '/assets/imgs/products-img1',
    descript: 'Your Skin But Better CC+ Cream with SPF50 12ml ',
    price: '28.00',
  },
  {
    id: 11,
    status: 'SOLD',
    image: '/assets/imgs/products-img2',
    descript: 'Your Skin But Better CC+ Cream with SPF50 12ml ',
    price: '28.00',
  },
  {
    id: 12,
    status: 'LEFT',
    image: '/assets/imgs/products-img3',
    descript: 'Your Skin But Better CC+ Cream with SPF50 12ml ',
    price: '28.00',
  },
  {
    id: 10,
    status: 'NEW',
    image: '/assets/imgs/products-img1',
    descript: 'Your Skin But Better CC+ Cream with SPF50 12ml ',
    price: '28.00',
  },
  {
    id: 11,
    status: 'SOLD',
    image: '/assets/imgs/products-img2',
    descript: 'Your Skin But Better CC+ Cream with SPF50 12ml ',
    price: '28.00',
  },
  {
    id: 12,
    status: 'LEFT',
    image: '/assets/imgs/products-img3',
    descript: 'Your Skin But Better CC+ Cream with SPF50 12ml ',
    price: '28.00',
  },
  {
    id: 10,
    status: 'NEW',
    image: '/assets/imgs/products-img1',
    descript: 'Your Skin But Better CC+ Cream with SPF50 12ml ',
    price: '28.00',
  },
  {
    id: 11,
    status: 'SOLD',
    image: '/assets/imgs/products-img2',
    descript: 'Your Skin But Better CC+ Cream with SPF50 12ml ',
    price: '28.00',
  },
];

let sliderContainer = document.getElementById('products__list');
let cta__btn = document.getElementById('cta__btn');

var show = false;
cta__btn.addEventListener('click', () => {
  show = !show;
});
console.log(show, 'o');

const mappedProducts = production__list.map((product, index) => {
  return product.ads
    ? `
    <div class="product__ads ads__item"  >
      <div class="ads__title">
      At vero eos et accusamus et iusto odio dignissimos
      </div>
      <div class="ads__auther">Winnie Harlow</div>
    </div>
    `
    : show
    ? `
          <div key=${index} class="product__card">
            <div class="card__image">
                <div class="image__badge">${product?.status}</div>
                <img src="/assets/imgs/products-img1.png" />
                <div class="image__cta">
                    <a href="#"> + Quick Shop </a>
                </div>
            </div>
            <div class="card__details">
            <h4 class="details__title">
             ${product?.descript}
            </h4>
            <h4 class="details__price">$${product?.price} <span>$${product?.off}</span></h4>
            </div>
          </div>
        `
    : product.show &&
      `
          <div key=${index} class="product__card">
            <div class="card__image">
                <div class="image__badge">${product?.status}</div>
                <img src="/assets/imgs/products-img1.png" />
                <div class="image__cta">
                    <a href="#"> + Quick Shop </a>
                </div>
           </div>
            <div class="card__details">
            <h4 class="details__title">
             ${product?.descript}
            </h4>
            <h4 class="details__price">$${product?.price} <span>$${product?.off}</span></h4>
            </div>
          </div>
        `;
});

sliderContainer.innerHTML = mappedProducts.join('');
