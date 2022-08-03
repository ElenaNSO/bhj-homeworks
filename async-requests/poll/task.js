const QUESTION = document.getElementById('poll__title');
const ANSWERS = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php')
xhr.send();                                                 //отправляем, получаем запрос

function addPoll(question, answer) {                        //делаем вставку блока
    let strAnswer; 
    
    QUESTION.innerText = question;
    answer.forEach(element => {
        strAnswer = `<button class="poll__answer">
                         ${element}
                        </button>`
        ANSWERS.insertAdjacentHTML('beforeEnd', strAnswer);
    });                               
}

const idInterval = setInterval(() => {                          
        const TextRequest = xhr.responseText;                   //получаем результат запроса
        const masJson = JSON.parse(TextRequest);

        const title = masJson['data'].title;                    //выбираем два параметра (вопрос, ответы)         
        const answers = masJson['data'].answers;
        
        addPoll(title, answers);                                //вызов функции для вставки блока

        clearInterval(idInterval);
    }, 2000);

ANSWERS.addEventListener('click', event => {
    alert('Спасибо, ваш голос засчитан!')
})
