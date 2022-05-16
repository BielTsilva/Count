var btnIncrement = document.getElementById("increment");
var btnDecrement = document.getElementById("decrement");
var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

btnIncrement.addEventListener("click", increment);
btnDecrement.addEventListener("click", decrement);



function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber >= 10){
        currentNumberWrapper.style.color = 'white'
        console.log('white')
    }
    else if(currentNumber > 0 && currentNumber <10 ){
        currentNumberWrapper.style.color = 'black'
        console.log('black')
    }
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber < 0){
        currentNumberWrapper.style.color = 'red'
        console.log('red')
    }
    else if(currentNumber > 0 && currentNumber <10 ){
        currentNumberWrapper.style.color = 'black'
        console.log('black')
    }
}

