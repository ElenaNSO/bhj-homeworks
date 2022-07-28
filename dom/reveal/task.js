const REVAL_VISIBLE = document.querySelectorAll('.reveal');

function isVisible (el){
    const {top, bottom} = el.getBoundingClientRect()
    if(bottom < 0) {
        return false;
    }
    if(top > window.innerHeight){
        return false;
    }
    return true;
}

setInterval(() => {
    REVAL_VISIBLE.forEach(element => {
        if(isVisible(element)) {
            element.classList.add('reveal_active');
            console.log(element) 
        } 
                 
    },10000);
    
})