const PROGRESS = document.getElementById('progress');               //элемент для записи прогресса загрузки     
  
function loadProcess(a, b){                                         
    PROGRESS.value = +(a / b).toFixed(2);
}
 
let form = document.getElementById('form'); 

form.addEventListener('submit', function(e) { 
    e.preventDefault();                                             //остановила действие submit
    let xhr = new XMLHttpRequest(); 
    formData = new FormData(this); 

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php'); 
    xhr.responseType = 'json';
      
    if(xhr.upload){
        xhr.upload.addEventListener("progress", function (e) {          //слушаю событие изменения процесса загрузки
            if (e.lengthComputable) {
                loadProcess (e.loaded, e.total);
            }
        }, false);

        xhr.onload = function(){                                        //проверяю статус загрузки
            console.log(this.status)
            if(this.status === 200){
                alert('Данные успешно отправлены');
            } else{
                alert('Страница не найдена!');
            }
        };

        xhr.onerror = function(){
              alert('Проверьте соединение с интернетом!');
            };
        xhr.send(formData);
      }
    })







