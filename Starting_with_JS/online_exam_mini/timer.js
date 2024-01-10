var count = 0;
var timer;
function timerCounter() {
    count++;
    lbl1.innerHTML = count;
   
}

function btn1Click() {
  timer = setInterval(timerCounter, 1000);

}

function btn2Click() {
    clearInterval(timer);
}

function btn3click() {
    clearInterval(timer);
    lbl1.innerHTML = "0";
    count = 0;
}