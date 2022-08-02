const CART_TITLE = document.querySelector('.cart__products');       //для работы с корзиной
const PRODUCT = document.querySelectorAll('.product');              //для работы с товаром
let massProducts = [];                                              //хранение артиклей выбранного товара в корзине

function addProduct(count, imgProduct, idProduct){                  //доавление товара в корзину
    if((massProducts.length === 0) || (!massProducts.includes(idProduct))) {        //если товаров нет или товар не добавлен в корзину, добавляем
        massProducts.push(idProduct);
        const strProduct = `<div class="cart__product" data-id=${idProduct}>
                                <img class="cart__product-image" src=${imgProduct}>
                                <div class="cart__product-count">${count}</div>
                            </div>`
        CART_TITLE.insertAdjacentHTML('beforeEnd', strProduct);
    } else {                                                        //меняем количество существующего в корзине товара
        let str = `.cart__product[data-id="${idProduct}"]`
        const PRODUCT_COUNT_CHANGE = document.querySelectorAll(str);
        PRODUCT_COUNT_CHANGE[0].children[1].innerText = +count + (+PRODUCT_COUNT_CHANGE[0].children[1].innerText)
    }
}

PRODUCT.forEach(element => {
    element.addEventListener('click', event => {
            
        let PRODUCT_COUNT = +event.target.closest('.product').querySelectorAll('.product__quantity-value')[0].innerText;    //количество товара
        let PRODUCT_IMG = event.target.closest('.product').querySelectorAll('.product__image')[0].currentSrc;               //изображение товара
        let PRODUCT_ID = event.target.closest('.product').getAttribute('data-id')                                           //id товара

        //выбираем, на каком элементе произошло событие
        if(event.target.className.includes('product__quantity-control_dec')) {
            if(PRODUCT_COUNT > 0) {
                event.target.closest('.product').querySelectorAll('.product__quantity-value')[0].innerText = PRODUCT_COUNT - 1
            }
        }

        if(event.target.className.includes('product__quantity-control_inc')) {
            event.target.closest('.product').querySelectorAll('.product__quantity-value')[0].innerText = PRODUCT_COUNT + 1
        }

        if(event.target.className.includes('product__add')) {
            if(PRODUCT_COUNT > 0) {
                addProduct(PRODUCT_COUNT, PRODUCT_IMG, PRODUCT_ID);
            }
        }
    }) 
});
