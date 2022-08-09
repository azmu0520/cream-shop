const production__list = [
  {
    product: {
      name: 'Universal mineral face lotion SPF55',
      size: '1.7 fl oz',
      variant: 'One Time Purchase',
      image: '/assets/imgs/products-img1.png',
    },

    price: '28.00',
  },
  {
    product: {
      name: 'Universal mineral face lotion SPF55',
      size: '1.7 fl oz',
      variant: 'One Time Purchase',
      image: '/assets/imgs/products-img1.png',
    },

    price: '28.00',
  },
  {
    product: {
      name: 'Universal mineral face lotion SPF55',
      size: '1.7 fl oz',
      variant: 'One Time Purchase',
      image: '/assets/imgs/products-img1.png',
    },

    price: '28.00',
  },
  {
    product: {
      name: 'Universal mineral face lotion SPF55',
      size: '1.7 fl oz',
      variant: 'One Time Purchase',
      image: '/assets/imgs/products-img1.png',
    },

    price: '28.00',
  },
  {
    product: {
      name: 'Universal mineral face lotion SPF55',
      size: '1.7 fl oz',
      variant: 'One Time Purchase',
      image: '/assets/imgs/products-img1.png',
    },

    price: '28.00',
  },
];
let sliderContainer = document.getElementById('tbody');

production__list
  .map((product, index) => {
    sliderContainer.innerHTML += `
    <tr key=${index} class="tbody__row">
        <td class="row__data">
            <div class="product__image">
                <img
                src='${product.product.image}'
                alt="product__image"
                class="product__thumbnail"
                />
            </div>
            <div class="details__wrap">
                <div class="detail__title">
                   ${product.product.name}
                </div>
                <div class="detail__variant detail--size">Size: ${product.product.size}</div>
                <div class="detail__variant">${product.product.variant}</div>
                <div class="detail__remove">Remove</div>
                <div class="detail__price__mobile "> $28.00</div>
                <div class="qty__wrapper--mobile"><span>-</span> 1 <span>+</span></div>
                <div class="detail__remove-mobile">Remove</div>
            </div>
        </td>
        <td>
            <div class="price__row">${product.price}</div>
        </td>
        <td>
            <div class="qty__wrapper"><span>-</span> 1 <span>+</span></div>
        </td>
        <td>
            <div class="price__row">$28.00</div>
        </td>
    </tr>
    
    `;
  })
  .join('');
