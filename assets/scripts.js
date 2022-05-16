var btnIncrement = document.getElementById("increment");
var btnDecrement = document.getElementById("decrement");
var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

btnIncrement.addEventListener("click", increment);
btnDecrement.addEventListener("click", decrement);

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}