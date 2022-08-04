const progressLoading = document.getElementById('progress');               //элемент для записи прогресса загрузки     
progressLoading.value = 0;  

function loadProcess(a, b){   
    if(progressLoading.value < +(a / b)) {                                     
        progressLoading.value = +(a / b).toFixed(2);
    }
}
 
let form = document.getElementById('form'); 

form.addEventListener('submit', function(e) { 
    e.preventDefault();                                             //остановила действие submit
    let xhr = new XMLHttpRequest(); 
    formData = new FormData(this); 

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php'); 
    xhr.responseType = 'json';
   
        const idInterval = setInterval(() => {
            if (!xhr.upload.onprogress) {
                if (progressLoading.value < 0.85) {
                    progressLoading.value = 0.006 +  progressLoading.value
                }
            }
        }, 4000)

    
    if(xhr.upload){
        xhr.upload.addEventListener("progress", function (e) { 
            clearInterval(idInterval);
                                                                    //слушаю событие изменения процесса загрузки
            if (e.lengthComputable) {
                loadProcess (e.loaded, e.total);
            }
        }, false);

        xhr.onload = function(){                                        //проверяю статус загрузки
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







