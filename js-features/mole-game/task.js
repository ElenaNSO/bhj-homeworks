let hit = miss =  0; // miss - промах,  hit - попал
let massGetHole = [];

const DEAD = document.querySelector("#dead"); //попал
const LOST = document.querySelector("#lost"); // промах

function examination (hit, miss) {
    if(miss <= 5) {
        if(hit === 11) {
            return 'hit';
        }
    }
    else {
           return 'miss';
    }
}

for (index = 1; index < 10; index++) {
    massGetHole.push(document.getElementById(`hole${index}`));
}

massGetHole.forEach(element => element.onclick = function() {
    if(element.className === 'hole hole_has-mole') {
        hit += 1; 
        if(examination (hit, miss) == 'hit') {
            hit = miss = 0;
            alert('Победа!!');
        }
        DEAD.textContent = hit;
        LOST.textContent = miss;
    }
    else if(element.className === 'hole') {
            miss += 1;
            if(examination (hit, miss) == 'miss') {
                hit = miss = 0;
                alert('Вы проиграли!!');
            }
        DEAD.textContent = hit;
        LOST.textContent = miss;
    }
});








