const signin = document.querySelector('.signin');
const form = document.getElementById('signin__form');                       //находим форму
const userId = document.getElementById('user_id');                          //константа для сохранения ID

if((localStorage.getItem('userID')) !== null){                              //если ID сохранен - приветствуем
   welcome(localStorage.getItem('userID'));
}

function welcome(idValue){                                                  //фунцкия приветствия
    signin.classList.remove('signin_active');                                     
    userId.textContent = idValue;
    document.querySelector('.welcome').classList.add('welcome_active');
    setTimeout(() => {                                                      //через 4 секунды убираем приветствие
        document.querySelector('.welcome').classList.remove('welcome_active');
    }, 4000 )
}

form.addEventListener('submit', function(e) { 
    e.preventDefault();                                                        //остановила действие submit
                                          
    let xhr = new XMLHttpRequest(); 
    formData = new FormData(form); 

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php'); 
           
    xhr.addEventListener('readystatechange', () => {                            //ждем статус загрузки
        if(xhr.readyState === xhr.DONE) {
            if(JSON.parse(xhr.responseText)["success"] === true) {
                let userIdValue = JSON.parse(xhr.responseText)["user_id"];  //при успешной загрузке парсим текст, сохраняем ID
                localStorage.setItem('userID', userIdValue)                 //записываем ID  докальное хранилище
                welcome(userIdValue);                                        //приветсвуем
            } else {                                            
                alert('Неверный логин/пароль')
            }
            document.querySelectorAll('input.control')[0].value = null;     //очищаем поля формы
            document.querySelectorAll('input.control')[1].value = null;
        }
    })

    xhr.onerror = function(){
        alert('Проверьте соединение с интернетом!');
    };

    xhr.send(formData);
})
 