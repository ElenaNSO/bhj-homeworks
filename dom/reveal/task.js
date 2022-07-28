const REVAL_VISIBLE = document.querySelectorAll('.reveal');

function isVisible (el){
    const {top, bottom} = el.getBoundingClientRect()
    return !(bottom < 0 || top > window.innerHeight);
}

setInterval(() => {
    REVAL_VISIBLE.forEach(element => {
        (isVisible(element)) ? element.classList.add('reveal_active'): element.classList.remove('reveal_active');        
    },10000);
    
})