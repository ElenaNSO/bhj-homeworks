let intervalId = null;
const countSecond = document.getElementById("timer");
let hourMinutes = '00:00:';
let secondString = countSecond.textContent;
function countTimer() {
    
    //const countSecond = document.getElementById("timer");
    /*if(countSecond.textContent > 0){

       countSecond.textContent -= 1;
    
    }*/
    
    if(secondString > 0){
        secondString -= 1;
        let countSecondTextContent = hourMinutes + secondString.toString().padStart(2,0);
        countSecond.textContent = countSecondTextContent;
    }
    else{
        clearTimeout(intervalId);  
        alert("Вы победили в конкурсе");
    }
} 
intervalId = setInterval(countTimer, 1000);
    

