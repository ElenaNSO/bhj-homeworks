const MODAL_MAINE = document.querySelector('#modal_main');
const MODAL_SUCCESS = document.querySelector('#modal_success');

MODAL_MAINE.style.display = 'flex';

let arrayModalMain = Array.from(document.querySelectorAll('.modal#modal_main'));

arrayModalMain[0].childNodes[1].childNodes[1].onclick = function(){
    MODAL_MAINE.style.display = 'none';   
}
arrayModalMain[0].childNodes[1].childNodes[3].onclick = function(){
    MODAL_MAINE.style.display = 'none';  
    MODAL_SUCCESS.style.display = 'flex'; 
}