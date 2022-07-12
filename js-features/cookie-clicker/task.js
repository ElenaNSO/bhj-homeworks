const CHANGE_WIDTH = document.getElementById("cookie");
const COUNT_CLICK = document.querySelector("#clicker__counter");

let secondString = +COUNT_CLICK.textContent;
let countFirstClick = countSecondClick = 0;

function countTimer() {
    secondString += 1;
    let speed = (1000 / (countFirstClick - countSecondClick)).toFixed(2);

    let stringClickAndSpeed = secondString + '</br> скорость клика: ' + speed;
    COUNT_CLICK.innerHTML = stringClickAndSpeed;
     
    countSecondClick = countFirstClick;
}

CHANGE_WIDTH.onclick = function clickCount() {
  countFirstClick = new Date().getTime();

  if(CHANGE_WIDTH.offsetWidth === 200) {
      CHANGE_WIDTH.width = "100";
      countTimer();
  }
  else {
    CHANGE_WIDTH.width = "200";
    countTimer();
  }
}
