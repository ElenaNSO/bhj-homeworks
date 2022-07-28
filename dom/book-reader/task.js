const CHOICE = document.querySelectorAll('.book__control');
const CHOICE_FONT_SIZE = document.querySelectorAll('.font-size');//изменение размера
const CHOICE_COLOR = Array.from(document.querySelectorAll('.book__control_color'));//изменение цвета текста
const CHOICE_BACKGROUND = Array.from(document.querySelectorAll('.book__control_background'));//изменение цвета фона

const BOOK_CONTENT = document.querySelectorAll('.book__content');//контент

//функция замены размера
function choiceFontSize(element) {//обнулили активный элемент
    CHOICE_FONT_SIZE.forEach(el => {
        el.classList.remove ('font-size_active');
        
    });  
    
    element.classList.add('font-size_active'); //задали активный элемент
    
    switch(element.dataset.size){
        case 'small':
            BOOK_CONTENT.forEach(element => {
                element.classList.remove ('book_fs-big');
                element.classList.add('book_fs-small');
            });
           
           break;
        case 'big' :
            BOOK_CONTENT.forEach(element => {
                element.classList.remove ('book_fs-small');
                element.classList.add('book_fs-big');
            });
           break;
        default:
            BOOK_CONTENT.forEach(element => {
                element.classList.remove ('book_fs-small');
                element.classList.remove ('book_fs-big');
            });
            
    }
}

//функция замены цвета текста
function choiseColor(element){
    for (let i=0; i<CHOICE_COLOR[0].children.length; i++){
        if(CHOICE_COLOR[0].children[i].classList.contains('color')){
            CHOICE_COLOR[0].children[i].classList.remove ('color_active');  
        }
    }
    
    element.classList.add('color_active'); 
    
    switch(element.dataset.textColor){
        case 'black':
            BOOK_CONTENT.forEach(element => {
                element.classList.remove('book_color-gray');
                element.classList.remove ('book_color-whitesmoke');
                element.classList.add('book_color-black');
            });
           
           break;
        case 'gray' :
            BOOK_CONTENT.forEach(element => {
                element.classList.remove ('book_color-whitesmoke');
                element.classList.remove('book_color-black');
                element.classList.add('book_color-gray');
            });
           break;
        case 'whitesmoke':
            BOOK_CONTENT.forEach(element => {
                element.classList.remove('book_color-gray');
                element.classList.remove('book_color-black');
                element.classList.add ('book_color-whitesmoke');
            });
            
    }
}

//функция замены цвета фона
function choiseBackground(element){
    for (let i=0; i<CHOICE_BACKGROUND[0].children.length; i++){
        if(CHOICE_BACKGROUND[0].children[i].classList.contains('color')){
            CHOICE_BACKGROUND[0].children[i].classList.remove ('color_active');  
        }
    }
    
    element.classList.add('color_active'); 
    
    switch(element.dataset.bgColor){
        case 'black':
            BOOK_CONTENT.forEach(element => {
                element.classList.remove('book_bg-gray');
                element.classList.remove ('book_bg-white');
                element.classList.add('book_bg-black');
            });
           
           break;
        case 'gray' :
            BOOK_CONTENT.forEach(element => {
                element.classList.remove('book_bg-black');
                element.classList.remove ('book_bg-white');
                element.classList.add('book_bg-gray');
            });
           break;
        case 'white':
            BOOK_CONTENT.forEach(element => {
                element.classList.remove('book_bg-gray');
                element.classList.remove('book_bg-black');
                element.classList.add ('book_bg-white');
            });
            
    }
}

//слушаем событие
CHOICE.forEach(element => {
    element.addEventListener('click', element => {
     if(element.target.parentElement.classList.contains('book__control_font-size')) {
         choiceFontSize(element.target);
     } 
     if(element.target.parentElement.classList.contains('book__control_color')){
        choiseColor(element.target);
     }
     if(element.target.parentElement.classList.contains('book__control_background')){
        choiseBackground(element.target);
    }
     element.preventDefault();
    })
})

