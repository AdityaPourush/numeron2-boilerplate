// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

let box1 = document.querySelector("#number1");
let box2 = document.querySelector("#number2");

let number1 = Math.round(Math.random() * 100);
let number2 = Math.round(Math.random() * 100);

box1.textContent = number1;
box2.textContent = number2;

// Iteration 3: Creating variables required to make the game functional

let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let mul = document.querySelector("#mul");
let divide = document.querySelector("#divide");
let modulus = document.querySelector("#modulus");
let timer = document.querySelector("#timer");

let score = 0;

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

let box3 = document.querySelector("#number3");
let number3;

// Iteration 5: Creating a randomise function to make the game functional

function randomise(){
    number1 = Math.round(Math.random() * 100);
    number2 = Math.round(Math.random() * 100);

    box1.textContent = number1;
    box2.textContent = number2;
    
    let operator = Math.ceil(Math.random()*5)
    
    switch(operator){
        case 1 : 
            number3 = number1 + number2;
            break;
        case 2 :
            number3 = number1 - number2;
            break;
        case 3 :
            number3 = number1 * number2;
            break;
        case 4 :
            number3 = Math.floor(number1 / number2);
            break;
        case 5 :
            number3 = number1 % number2;
            break;
    }
    box3.textContent = number3;
}

randomise()

// Iteration 6: Making the Operators (button) functional

plus.addEventListener("click", () => {
    if(number3 == number1 + number2){
        score++;
        randomise();
        clearInterval(interval);
        startInterval();
    }else{
        gameOver();
    }
})

minus.addEventListener("click", () => {
    if(number3 == number1 - number2){
        score++;
        randomise();
        clearInterval(interval);
        startInterval();
    }else{
        gameOver();
    }
})

mul.addEventListener("click", () => {
    if(number3 == number1 * number2){
        score++;
        randomise();
        clearInterval(interval);
        startInterval();
    }else{
        gameOver();
    }
})

divide.addEventListener("click", () => {
    if(number3 == number1 / number2){
        score++;
        randomise();
        clearInterval(interval);
        startInterval();
    }else{
        gameOver();
    }
})

modulus.addEventListener("click", () => {
    if(number3 == number1 % number2){
        score++;
        randomise();
        clearInterval(interval);
        startInterval();
    }else{
        gameOver();
    }
})

function gameOver(){
    window.location.href = `./gameover.html?score=${score}`
}
// Iteration 7: Making Timer functional

let time;
let interval;

function startInterval(){
    time = 20;
    timer.textContent = time;
    interval = setInterval(() => {
        time--;
        timer.textContent = time;

        if(time == 0){
            clearInterval(interval);
            location.href = "./gameover.html"
        }
    }, 1000);
}
startInterval();