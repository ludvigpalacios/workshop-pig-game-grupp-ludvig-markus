// =============================================
// Grisspelet
// =============================================


// ---------- 1. Speldata ----------

const WINNING_SCORE = 100; // Poäng som krävs för att vinna

let scores = [0, 0];       // Totalpoäng: scores[0] = Spelare 1, scores[1] = Spelare 2
let roundScore = 0;        // Omgångspoäng för den aktiva spelaren
let activePlayer = 0;      // 0 = Spelare 1, 1 = Spelare 2
let isPlaying = true;      // Blir false när någon har vunnit


// ---------- 2. Element i DOM:en ----------

// == Marcus Ti

// Ticket-2 Hämta knappen från DOM
const grabBtnRoll=document.querySelector(".btn-roll");

// En eller två 1or
const roundScoreFail=document.querySelector(".player-current-label");

// Hämtar dice 1 & 2 ID
const Dice1 = document.querySelector("#dice-1")
const Dice2 = document.querySelector("#dice-2")

// Hämtar båda spelarnas omgångspoäng
const player1CurrentPoints = document.querySelector("#current-1")
const player2CurrentPoints = document.querySelector("#current-2");

// == Ludvig Ticket 1 
 // == We grab the "btn-new" class == 
const newGame=document.querySelector(".btn-new");
// == We grab the players roundScore
const grabPlayer1RoundScore=document.querySelector("#current-0");
const grabPlayer2RoundScore=document.querySelector("#current-1");
// == We grab the players scores
const grabPlayer1Scores=document.querySelector("#score-0");
const grabPlayer2Scores=document.querySelector("#score-1");
// == Grab players names
const grabPlayer1Name=document.querySelector("#name-0");
const grabPlayer2Name=document.querySelector("#name-1");

// == Grab the dices using querySelectorAll
const grabDiceImages=document.querySelectorAll(".dice");



// ---------- 3. Funktioner ----------

// SPEL-1: Startar ett nytt spel
// Pseudokoding

//When the page loads
document.addEventListener("DOMContentLoaded", init);
//  or player clicks new game
newGame.addEventListener("click",init);

//The init function resets the players roundScore and scores
function init() {
    //Reset the players roundScoure

    console.log("Resetting the game");
    grabPlayer1RoundScore.textContent=0;
    grabPlayer2RoundScore.textContent=0;
    //Reset the players total scores 
    grabPlayer1Scores.textContent=0;
    grabPlayer2Scores.textContent=0;

    //Resets the players name to default
    grabPlayer1Name.textContent="Player 1";
    grabPlayer2Name.textContent="Player 2";

    //Hide the dices
    //grabDiceImages.toggle("hidden");
    
    //grabDiceImages.classList.remove("dice");
    
    grabDiceImages.forEach(function (dice) {
    dice.classList.add("hidden");
    });
    
    
}

//Hides the dices
//




//Listen for a click with addEventListener
//if it detects a click, point a function that runs the loop (the game)
//grabBtnRoll.addEventListener("click", startGame);
//Inside the loop, we create two variables, that each point to a random number between 1 and 6 
//function startGame (){
    //Inside the loop, we create two variables, that each point to a random number between 1 and 6 
    //let dice1=Math.floor(Math.random() * 6) + 1; //Figure out Math function 
    //let dice2=Math.floor(Math.random() * 6) + 1;
    //We check if any of those variables is equal to 1, which then resets the players roundScore
    //if(dice1 || dice2 === 1){
        //We need to create a variable for the players scores
        //ID for player 1 is current-0, and current-1 for player 2 



   // } 
    
//}
//We check if any of those variables is equal to 1, which then resets the players roundScore
//And changes activePlayer to 1 (Next player), and breaks the loop




// Marucs - Ticket 2
// SPEL-2: Körs när man klickar på "Slå tärning"

grabBtnRoll.addEventListener("click", rollDice);

// const roundScoreFail = player1CurrentPoints || player2CurrentPoints()
// Skapa funktionen
function rollDice() {
    // console.log("Användaren slår tärningarna");
const diceValue1 = Math.floor(Math.random() * 6) + 1;
const diceValue2 = Math.floor(Math.random() * 6) + 1;
console.log(diceValue1, diceValue2)

if (diceValue1 === 1 || diceValue2 === 1){
        switchPlayer();
}
else {
    roundScore = diceValue1 + diceValue2;
}
 }

// SPEL-3 och SPEL-4: Körs när man klickar på "Håll poäng"
function holdScore() {

}

// Marucs - Ticket 2
// SPEL-2: Byter till den andra spelaren
function switchPlayer() {

}


// ---------- 4. Händelser ----------


