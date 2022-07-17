let massMenuLink = Array.from(document.querySelectorAll('.menu__link'));
let MENU_MAIN = document.querySelector('.menu_main');
  
const toggleMenu= (element) => {
    if(element.nextElementSibling.className === "menu menu_sub menu_active") {
        element.nextElementSibling.classList.toggle('menu_active',false);
    }
    else if(element.nextElementSibling.className === "menu menu_sub") {
        element.nextElementSibling.classList.toggle('menu_active',true);
    }
}

const hideMenu = () => {
  massMenuLink.forEach(element => {
    if(element.nextElementSibling != null){
        if(element.nextElementSibling.className === "menu menu_sub menu_active") {
          element.nextElementSibling.classList.toggle('menu_active',false);
        }
      }
  })
}

MENU_MAIN.addEventListener('click', element => {
  hideMenu();
  toggleMenu(element.target);
  element.preventDefault();
  MENU_MAIN.removeEventListener("click", toggleMenu());
  
},false)

