const modal = document.querySelector('.modal');

let key = 'show';
let value = 'ended';

function getCookies(element, key) {                     //функция корректного ввода кук
    let strSr = key + '=' + value;
    let res;
    if(element.trim().length !== 0) {                   //строка кук есть?
        let startStr = element.search(key);             //ищем индекс начала кук
        if(startStr !== -1){
            let endStr = element.search('; ')           //ищу индекс точки с запятой
            if(endStr !== -1) {
                (element.slice(startStr,endStr) == key + '=' + value) ? res = 1: res = 0;   //если найденная строка равна куку рез = 1
            } else (element == strSr) ? res = 1: res = 0;
        } else res = 0;
    } else res = 0;
    return res;  
}

if(getCookies(document.cookie,key) == 0) {              //document.cookie,key
    modal.classList.add('modal_active');
}

modal.addEventListener('click', event => {              //по щелчку на кнопке закрытия скрываем окно и записываем кук
    if(event.target.className.includes('modal__close')) {
        modal.classList.remove('modal_active');
        document.cookie = encodeURIComponent(key) + '=' + encodeURIComponent(value) + 'max-age=36000';           //3600 сек хранится
    }
})