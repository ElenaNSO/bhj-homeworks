  const MENU_VALUE = document.querySelector('.dropdown');
  let valueDropdown;
  MENU_VALUE.addEventListener('click', element => {
      if(element.target.className === 'dropdown__value') {
        element.target.nextElementSibling.classList.add('dropdown__list_active');
        element.target.nextElementSibling.addEventListener('click', element => {
            valueDropdown = element.target.innerText;
            element.preventDefault();
            MENU_VALUE.childNodes[1].innerText = valueDropdown;
            MENU_VALUE.childNodes[1].nextElementSibling.classList.remove('dropdown__list_active');
        })
      }
  },once = true)