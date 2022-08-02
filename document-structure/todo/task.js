const BUTTON_ADD = document.querySelector('.tasks__add');           //элемент кнопки
const INPUT_TASK = document.querySelector('.tasks__input');
const TASKS_LIST = document.querySelector('#tasks__list');          //список задач

function addTask(element){                                          //создаю новый элемент - задачу
    const strTask = `
    <div class="task">
        <div class="task__title"> ${element}
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>
    `
    TASKS_LIST.insertAdjacentHTML('beforeEnd',strTask);             //запись элемента в список
}

BUTTON_ADD.addEventListener('click', event => {                     //слушаю кнопку Добавить
    if(INPUT_TASK.value.trim().length === 0){
        alert('не ввели задачу');
    }
    else {
        addTask(INPUT_TASK.value);
        INPUT_TASK.value = null;
        INPUT_TASK.focus();
    }
    event.preventDefault();
})

TASKS_LIST.addEventListener('click', event => {                     //слушаю кнопку Удалить
    if(event.target.className.includes( 'task__remove')) {
        event.target.parentElement.remove();  
    }
})
