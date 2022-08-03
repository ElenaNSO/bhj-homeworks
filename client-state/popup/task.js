const MODAL = document.querySelector('.modal');

let key = 'subscription window'
let value = 'once open'

function getCookies(element, key) {
    let strSr = key + '=' + value;
    let res;
    if(element.trim().length !== 0) {
        let startStr = element.search(key);         //
        if(startStr !== -1){
            let endStr = element.search('; ')        //здесь ищу точку с запятой
            if(endStr !== -1) {
                (element.slice(startStr,endStr) == key + '=' + value) ? res = 1: res = 0;
            } else (element == strSr) ? res = 1: res = 0;
        }else res = 0;
    }else res = 0;
    return res;  
}

if(getCookies(document.cookie,key) == 0) {          //document.cookie,key
    MODAL.classList.add('modal_active');
}

MODAL.addEventListener('click', event => {
    if(event.target.className.includes('modal__close')) {
        MODAL.classList.remove('modal_active');
        document.cookie = encodeURIComponent(key) + '=' + encodeURIComponent(value) + 'max-age=3600';           //3600 сек хранится
    }
})