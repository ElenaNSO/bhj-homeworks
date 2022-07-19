let massMenuLink = document.querySelectorAll('.menu__link');
let MENU_MAIN = document.querySelector('.menu_main');
  
const hideMenu = () => {
  massMenuLink.forEach(element => {
    if(element.nextElementSibling != null){
        if(element.nextElementSibling.classList.contains("menu_active")) {
          element.nextElementSibling.classList.remove('menu_active');
        }
      }
  })
}

MENU_MAIN.addEventListener('click', element => {
  let childName = element.target;
  let parentEventList = childName.closest('.menu__item');
 
  switch(parentEventList.children[1].className ) {
    case "menu menu_sub menu_active":
      parentEventList.children[1].classList.remove('menu_active');
      break;
    case "menu menu_sub":
      hideMenu();
      parentEventList.children[1].classList.add('menu_active');
      break;
      default:
        break;
  }
  element.preventDefault();
},false)