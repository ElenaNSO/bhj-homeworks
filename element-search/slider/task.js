const CAROUSEL = document.querySelector('.slider__arrows');
const IMAGES_SLAIDER = document.querySelectorAll('.slider__item');
let massImagesSlaider = Array.from(IMAGES_SLAIDER);
let massPointsSlaider = Array.from(document.querySelectorAll('.slider__dot'));
let ActivElement = 0;

//переход по стрелкам влево
const moveLeft = () => {
    if(ActivElement != 0) {
        massImagesSlaider[ActivElement - 1].classList.add('slider__item_active');
        ActivElement = ActivElement - 1;
    }
    else {
        massImagesSlaider[massImagesSlaider.length - 1].classList.add('slider__item_active');
        ActivElement = massImagesSlaider.length - 1;
    }
    massPointsSlaider[ActivElement].classList.add('slider__dot_active'); 
}

//переход по стрелкам вправо
const moveRight = () => {
    if(ActivElement != (massImagesSlaider.length - 1)) {
        massImagesSlaider[ActivElement + 1].classList.add('slider__item_active');
        ActivElement =  ActivElement + 1;
    }
    else {
        massImagesSlaider[0].classList.add('slider__item_active');
        ActivElement = 0;
    }
    massPointsSlaider[ActivElement].classList.add('slider__dot_active');
}

CAROUSEL.addEventListener('click', element => {
    massImagesSlaider[ActivElement].classList.remove('slider__item_active');
    massPointsSlaider[ActivElement].classList.remove('slider__dot_active');
    if(element.target.classList.contains('slider__arrow_prev')) {
        moveLeft();
        }
    else {
            if(element.target.classList.contains('slider__arrow_next')) {
                moveRight();  
            }
        }
})

//переход по точкам
massPointsSlaider.forEach(element => {
    element.addEventListener('click', element => {
    massPointsSlaider[ActivElement].classList.remove('slider__dot_active');
    massImagesSlaider[ActivElement].classList.remove('slider__item_active');
    massImagesSlaider[massPointsSlaider.indexOf(element.target)].classList.add('slider__item_active');
    ActivElement = massPointsSlaider.indexOf(element.target);
    })
}, once = true)
