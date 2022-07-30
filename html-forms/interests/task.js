const CHECK = document.querySelectorAll('.interest');

CHECK.forEach(element => {
    element.addEventListener('change', (event) =>{
        const trueFalse = event.target.checked;
        const CHECK_INTEREST_PARENT = event.target.closest('.interest')
        const MASS_CHECK = CHECK_INTEREST_PARENT.children[1].querySelectorAll('.interest__check')
        
        MASS_CHECK.forEach(element => {
            element.checked = trueFalse;
        });
    });
});
   
    