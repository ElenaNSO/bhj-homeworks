const MENU_ITEMS = Array.from(document.querySelectorAll('.tab'));
const MENU_CONTENT = Array.from(document.querySelectorAll('.tab__content'));

function dellClass(){
    MENU_ITEMS.forEach(element => {
        element.classList.remove('tab_active');

    })
    MENU_CONTENT.forEach(element => {
        element.classList.remove('tab__content_active');

    })
}

MENU_ITEMS.forEach(element => {
    element.addEventListener('click', element => {
        let indexMenu = MENU_ITEMS.indexOf(element.target);
        dellClass();
        MENU_ITEMS[indexMenu].classList.add('tab_active');
        MENU_CONTENT[indexMenu].classList.add('tab__content_active')
        
    })
});