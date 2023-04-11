
// let playAgain = true
// while (playAgain){
//     let randomNumber = Math.ceil(Math.random() * 10);
//     console.log("Randome Number;",randonmNumber)
//     let userGuese = prompt("Enter A Guess Number 1 To 10.");
//     console.log("Your Guess Number")
//     if(randomNumber === Number(userGuese)){
//         // alert("Congratulation! Your Guess Is Correct");
//         console.log("Congratulation! Your Guess Is Correct");
//     }
//     else{
//         console.log("Your Guess Is Wrong");
//         // alert("Your Guess Is Wrong.");

//     }

//     let playAgain = confirm("Would You Play Again")
//     console.log("Would You Play Again");
// }



// do{

//     let randomNumberFrom1to10 = Math.ceil(Math.random() * 3);
//     let userGuess = +prompt("Guess a number between 1 and 10");

//     if (randomNumberFrom1to10 === userGuess) {
//         alert("Correct Guess");
//     } else {
//         alert("Incorrect Guess");
//     }

//     // isPlayAgain = confirm("Do you want to play again?");

// }
// while (confirm("Do you want to play again?"))









// let pElement = document.querySelectorAll('.para')[0];

// let playAgain = true
// while (playAgain) {
//     let randomNumber = Math.ceil(Math.random() * 3);
//     let userGuese = +prompt("Enter Your Lucky Number");

//     if (randomNumber === userGuese) {
//         // pElement.innerHTML = "You Win The Lucky Draw"
//         alert("You Win The Lucky Draw");
//     } else {
//         // pElement.innerHTML = "Better Luck Next time."
//         alert( "Better Luck Next time.");
//     }

//     playAgain = confirm("Would You Play Again.")
// }

// let isPlayAgain = true;

// while (isPlayAgain) {

//     let randomNumberFrom1to10 = Math.floor(Math.random() * 10) + 1;
//     let userGuess = +prompt("Guess a number between 1 and 10");

//     if (randomNumberFrom1to10 === userGuess) {
//         alert("Correct Guess");
//     } else {
//         alert("Incorrect Guess");
//     }

//     isPlayAgain = confirm("Do you want to play again?");

// }








// let playAgain = true;

// while(playAgain){
//     let randomNunmber = Math.ceil(Math.random() * 3);
//     let userGuese = +prompt("Enter Your Lucky Number");

//     if (randomNunmber ===userGuese ) {
//                 // alert("Correct Guess");
//                 pElement.innerHTML = pElement.innerHTML +"You Win The Lucky Draw"
//             } else {
//                 // alert("Incorrect Guess");
//                 pElement.innerHTML = pElement.innerHTML + "Better Luck Next time."
//             }

//             playAgain = confirm("Do You Want To Play Again.")
// }


// let playAgain = true 
// for(; playAgain;){
//     let randomNunmber = Math.ceil(Math.random() * 3);
//     let userGuese = +prompt("Enter Your Lucky Number");

//     if (randomNunmber ===userGuese ) {
//         alert("Correct Guess");
//         // pElement.innerHTML = pElement.innerHTML +"You Win The Lucky Draw"
//     } else {
//         alert("Incorrect Guess");
//         // pElement.innerHTML = pElement.innerHTML + "Better Luck Next time."
        
//     }

//     playAgain = confirm("Do You Want To Play Again.")
// }

// let pElement = document.querySelectorAll('.para')[0];
// function  cookFood(){
//     console.log("Mr Behrooz Khan Iftar IS Ready.");
    
// }

// cookFood();




// Practise Do While Loop Sir Class 12 and Function.


// userInput = 1
// count = 1
// while(userInput % 2 !== 0){
//     console.log(count++)
//     userInput = Number(prompt("Enter a Number."))
    

// }
// let playerScore = true
// let attempt = 0
// while(playerScore){
//     let ranNumber = math.ceil(Math.random() *3)
//     let userGuese = +prompt("Enter a Lucky Number")
//     if(ranNumber === userGuese){
//         console.log("You Win The Game.")
//         playerScore = false
//     }
//     else{
//         console.log("You Loss The Game.")
        
// }
// attempt++;
// playerScore++;

// }

// let playerScore = true;
// let attempt = 0;

// while (playerScore) {
//   let ranNumber = Math.ceil(Math.random() * 3);
//   let userGuess = +prompt("Enter a Lucky Number");

//   if (ranNumber === userGuess) {
    
//     playerScore = false;
//     console.log("Random Number " + ranNumber + " And Your Guess Number is " + userGuess + "You Win The Game.")
//     console.log("Number of Attempts",attempt++);
    
//   } else {
//     console.log("Random Number " + ranNumber + " And Your Guess Number is " + userGuess + "You Loss The Game.")
//     console.log("Number of Attempts",attempt++);
    
//   }  
// }

// let attempt = 0
// let playerScore = true
// do{
//   let ranNumber = Math.ceil(Math.random() * 3);
//   let userGuess = +prompt("Enter a Lucky Number");
//     if(ranNumber === userGuess){
//     playerScore = false;
//     console.log("Random Number " + ranNumber + " And Your Guess Number is " + userGuess + " You Win The Game.")
//     console.log("Number of Attempts",attempt++);
// }
// else{
//     console.log("Random Number " + ranNumber + " And Your Guess Number is " + userGuess + " You Loss The Game.")
//     console.log("Number of Attempts",attempt++);
// }
    
// }while(playerScore)


// function salam(fullName){
//     console.log("Assalam O Walikum " + fullName)
// }
// function eidMubarak(fullName){
//     console.log("Eid Mubark " + fullName)
// }
// function greeting(fName,lName , greetMsg){
//     greetMsg(fName , " " + lName) 
// }
// greeting("behrooz Khan" , "Barigzai", salam )
// greeting("Arman Khan" , "Barigzai", eidMubarak)


// function greeting(eid , fName , lName ){
//     console.log(eid, "" + fName + "" , lName);
// }

// greeting("Eid Mubarak", "behrooz Khan" , "Barigzai");

// function getSquareValue(num){
//     return num * num

// }
// function hypoSquare(baseSquare,perpSquare,findSquare){
//     let getSquare = findSquare(baseSquare) + findSquare(perpSquare)
//     console.log(Math.sqrt(getSquare))
// }
// hypoSquare(10,12,getSquareValue);

// function squareValue(num){
//     return num * num;
// }
// function hypoSquare(baseSquare,perpSquare,findSquare){
//     let  getSquare = findSquare(baseSquare) + findSquare(perpSquare);
//     console.log(Math.sqrt(getSquare));

// }
// hypoSquare(5,12,squareValue)

// let paraEl = document.querySelectorAll('.para')[0]

function call(){
    paraEl.innerHTML = "Welcome Back Behrooz khan";
}

// function timeCheck(){
//     setTimeout(call , 1000)
// }

// let p = document.querySelectorAll(".para")[0];


// function call(){
//     p.innerHTML = "Welcome Back Mr Behrooz Khan";
// }

// function showInDom(){
//     setTimeout(call, 3000);
// }

// showInDom();



// let mEl = document.querySelectorAll(".msg")[0];
// let count = 10
// function printCounter(){
//     mEl.innerHTML = --count
//  if(count === 1){
//     clearInterval(refer)

//  }
// }
// let refer = setInterval(printCounter,1000)


// let mEl = document.querySelectorAll(".msg")[0];
// let p = document.querySelectorAll(".para")[0];
// function   quotes(){
//     console.log("Behrooz kHan Are back As Soon As Possible.")
//     p.innerHTML = p.innerHTML + ("Behrooz kHan Are back As Soon As Possible.")
// }
// function stopWatch(){
//     let secFind = new Date().getSeconds();
//     mEl.innerHTML = mEl.innerHTML + secFind;
//     if(secFind % 10 === 0){
//         clearTimeout(quotes);
//         console.log(quotes)
//         clearInterval(readyWatch);

//     }
// }

// let readyWatch = setInterval(stopWatch,1000)

// let mEl = document.querySelectorAll(".msg")[0];
// let p = document.querySelectorAll(".para")[0];

// function quotes(){
//     console.log("Behrooz kHan Are back As Soon As Possible.")
//     p.innerHTML = p.innerHTML + "<p>Behrooz kHan Are back As Soon As Possible.</p>"
// }

// function stopWatch(){
//     let secFind = new Date().getSeconds();
//     mEl.innerHTML = mEl.innerHTML + secFind;
//     if(secFind % 10 === 0){
//         clearTimeout(quotes);
//         clearInterval(readyWatch);
//         quotes();
//     }
// }

// let readyWatch = setInterval(stopWatch,1000);



let mEl = document.querySelectorAll(".msg")[0];
let s = 0;
let m = 0;

function timer(){
    console.log(m + "  : " +s) 
    mEl.innerHTML = mEl.innerHTML + m + "  : " + s + "<br>";
    s++;
    if(s === 60){
        s= 0 ;
        m++;
    }
    if(m  === 2){
        clearInterval(timerRefre);
    }
}

let timerRefre = setInterval(timer , 1000);



let i = 0;


let refer = setInterval(function(){
    if( i === 10){
        clearInterval(i);
    }
    console.log()
},600)