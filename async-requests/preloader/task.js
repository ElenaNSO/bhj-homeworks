const ITEMS = document.querySelector('.item');              //находим элемент для добавления блоков валют
const LOADER = document.querySelector('#loader');           //элемент анимации, будем скрывать

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com')
xhr.send();                                                 //отправляем, получаем запрос

function addItems(cod, value) {                                 //делаем вставку блока валюты
    const strProduct = `<div class="item__code"> ${cod} </div>
                        <div class="item__value"> ${value} </div>
                        <div class="item__currency">руб.</div>`
                           
    ITEMS.insertAdjacentHTML('beforeEnd', strProduct);
}

const idInterval = setInterval(() => {                          //получаем результат запроса
    if(xhr.readyState === 4) {
        const TextRequest = xhr.responseText;
        const masJson = JSON.parse(TextRequest)
       
       Object.entries(masJson.response.Valute).forEach((item) => {  //выбираем два ключа и вызываем функцию для заполнеия блока валют
            let charCod = item[1].CharCode;
            let valueCod = item[1].Value; 
            addItems(charCod, valueCod);
        })
        
        LOADER.classList.remove('loader_active')
        ITEMS.classList.add('loader_active')

        clearInterval(idInterval)
    }
}, 2000);
