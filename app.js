const game = () => {
    let pScore = 0;
    let cScore = 0;
  
    //Start the Game
    const startGame = () => {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");
  
      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };
    //Play Match
    const playMatch = () => {
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll('.hands img');
      hands.forEach(hand=>{
          hand.addEventListener('animationend',function(){
              this.style.animation="";
          });
      });
    //computer options
    const computerOptions = ["rock", "paper", "scissors"];
  
    options.forEach(option => {
      option.addEventListener("click", function() {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
    
 //here we call comparehands//
setTimeout(() =>{
    comparehands(this.textContent,computerChoice);

    //update images//
    playerHand.src = `./image/${this.textContent}.png`;
    computerHand.src = `./image/${computerChoice}.png`;
},2000)
 //animation
    playerHand.style.animation="shakePlayer 2s ease";
 computerHand.style.animation="shakeComputer 2s ease";
});
  });
    };
    //for updating the score//
    const updateScore=()=>{
  const playerScore=document.querySelector('.player-score p');
  const computerScore=document.querySelector('.computer-score p');
  playerScore.textContent=pScore;
  computerScore.textContent=cScore;
    }
const comparehands=(playerChoice,computerChoice)=>{

    const winner=document.querySelector('.winner');
//checking for tie//
    if(playerChoice===computerChoice){
winner.textContent="It is a tie";

return;
}
//check for rock

if(playerChoice === "rock"){
    if(computerChoice === "scissors"){
        winner.textContent="Player wins";
pScore++;
updateScore();
        return; 
    }
    else{
        winner.textContent="Computer wins";
      
        cScore++;
        updateScore();
        return;
    }
}
// checking for paper//
if(playerChoice === "paper"){
    if(computerChoice === "scissors"){
        winner.textContent="Computer wins";
    cScore++;
    updateScore();
        return; 
    }
    else{
        winner.textContent="Player wins";
pScore++;
updateScore();
        return;
    }
} 

//checking for scissors

if(playerChoice === "scissors"){
    if(computerChoice === "rock"){
        winner.textContent="Computer wins";
    cScore++;
    updateScore();
        return; 
    }
    else{
        winner.textContent="Player wins";
pScore++;
updateScore();
        return;
    
    }
}
}


//calling  all the inner functions
startGame();
playMatch();


};



//start the game function
game();