const BODY_TOOLTIP = document.querySelector('body')
const HAS_TOOLTIP = document.querySelectorAll('.has-tooltip')
let flag = 0;                                           //флаг для отметки к ранее созданной подсказке 

function getCoords(elem) {                              //функция нахождения координат
    let box = elem.getBoundingClientRect();
    
    return {
      top: box.top + window.pageYOffset,
      right: box.right + window.pageXOffset,
      bottom: box.bottom + window.pageYOffset,
      left: box.left + window.pageXOffset
    };
  }

function creatTooltip(elem) {     
    let tooltip = document.createElement('div');            //создаю элемент для подсказки
    let coords = getCoords(elem);                       //для элемента устанавливаю координаты расположения
  
    if (flag == 1) {                                        //если уже создавали подсказку - удаляем
        document.querySelector('.tooltip').remove();
    }
    
    tooltip.classList.add('tooltip');
    tooltip.append(elem.title);                            //добавляю текст подсказки
    elem.append(tooltip)
        
    tooltip.style.left = coords.left + "px";              //задаю координаты
    tooltip.style.top = coords.bottom + "px";

    tooltip.style.position = 'absolute';
    tooltip.classList.add('tooltip_active');            //класс видимости элемента
    flag = 1;
  }
   
 BODY_TOOLTIP.addEventListener('click', event => {
    if(event.target.className.includes('has-tooltip')){ //если клик был на строке, где есть подсказка
        creatTooltip(event.target)
        event.preventDefault();
    }
})
   