const modal = document.querySelector('.modal');

let key = 'show';
let value = 'ended';

function getCookies(element, key) {                     //функция корректного ввода кук
    let strSr = key + '=' + value;
    console.log(element.includes(strSr))
     return element.includes(strSr)
}

if(!getCookies(document.cookie,key)) {              //если document.cookie НЕ содержит строку нашу строку кук - модальное окно не активно
    modal.classList.add('modal_active');
}

modal.addEventListener('click', event => {              //по щелчку на кнопке закрытия скрываем окно и записываем кук
    if(event.target.className.includes('modal__close')) {
        modal.classList.remove('modal_active');
        document.cookie = encodeURIComponent(key) + '=' + encodeURIComponent(value) + 'max-age=360';           //3600 сек хранится
    }
})