const rckBtn = document.getElementById('rckButton');
const paperBtn = document.getElementById('pprButton');
const scrBtn = document.getElementById('scrButton');
let plyerScore = document.getElementById('plrScore');
let compScore = document.getElementById('compScore');
let rndResult = document.querySelector('.round-result');
let rndInfo = document.querySelector('.round-info');
let playerSign = document.getElementById('plrSign');
let computerSign = document.getElementById('compSign');

let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

function updateSigns(plrSign,compSign) {

   switch(plrSign) {
    case 'Rock':
        playerSign.textContent = '✊';
        break
    case 'Paper':
        playerSign.textContent = '✋';
        break
    case 'Scissor':
        playerSign.textContent = '✌';
        break     
   }

   switch(compSign) {
    case 'Rock':
        computerSign.textContent = '✊';
        break
    case 'Paper':
        computerSign.textContent = '✋';
        break
    case 'Scissor':
        computerSign.textContent = '✌';
        break  
   }
}

function IsGameOver() {
    if (computerScore == 5 || playerScore == 5){
       return true;
    } else {
        return false;
    }
}

function updateScores() {


   if (roundWinner == 'Tie') {
    rndResult.textContent = "Its a Tie!";
   } else if (roundWinner == "Player") {
    rndResult.textContent = "You Won!";
   } else {
    rndResult.textContent = "You Loose!";
   }


   compScore.textContent = "Computer : " + computerScore;
   plyerScore.textContent = "Player : " + playerScore;

}

function ResetGame() {
    playerScore = 0;
    computerScore = 0;
    rndResult.textContent = "Choose Your Weapon!";
    rndInfo.textContent = "First to score 5 Points Wins the Game.";
    playerSign.textContent = '❔';
    computerSign.textContent = '❔';
    compScore.textContent = "Computer : 0";
    plyerScore.textContent = "Player : 0";
}

function PlayRound(PlayerSelection,computerSelec ) {


    if(IsGameOver()) {

        if (playerScore > computerScore) {
            alert("Congratulations! You Won!!");
        }
        else {
            alert("You Loose. Better Luck Next Time!!");
        }

        ResetGame();
    }

    if (PlayerSelection == "Rock" && computerSelec == "Paper") {

      computerScore = computerScore + 1;
      roundWinner = "Computer";
      updateScores();
      updateSigns(PlayerSelection,computerSelec);
      rndInfo.textContent = PlayerSelection + " is beaten by " + computerSelec;
    }
      else if (PlayerSelection == "Rock" && computerSelec == "Scissor" ) {
          playerScore = playerScore + 1;
          roundWinner = "Player";
          updateScores();
          updateSigns(PlayerSelection,computerSelec);
          rndInfo.textContent = PlayerSelection + " beats " + computerSelec;
      }
      else if (PlayerSelection == "Paper" && computerSelec == "Rock") {
          playerScore = playerScore + 1;
          roundWinner = "Player";
          updateScores();
          updateSigns(PlayerSelection,computerSelec);
          rndInfo.textContent = PlayerSelection + " beats " + computerSelec;
      }
      else if (PlayerSelection == "Paper" && computerSelec == "Scissor") {
          computerScore = computerScore + 1;
          roundWinner = "Computer";
          updateScores();
          updateSigns(PlayerSelection,computerSelec);
          rndInfo.textContent = PlayerSelection + " is beaten by " + computerSelec;
      }
      else if (PlayerSelection == "Scissor" && computerSelec == "Rock") {
          computerScore = computerScore + 1;
          roundWinner = "Computer";
          updateScores();
          updateSigns(PlayerSelection,computerSelec);
          rndInfo.textContent = PlayerSelection + " is beaten by " + computerSelec;
      }
      else if (PlayerSelection == "Scissor" && computerSelec == "Paper") {
          playerScore = playerScore + 1;
          roundWinner = "Player";
          updateScores();
          updateSigns(PlayerSelection,computerSelec);
          rndInfo.textContent = PlayerSelection + " beats " + computerSelec;
      }
      else {
        roundWinner = "Tie";
        updateScores();
        updateSigns(PlayerSelection,computerSelec);
        rndInfo.textContent = PlayerSelection + " ties with " + computerSelec;
      }

      if(IsGameOver()) {
        
        if (playerScore > computerScore) {
            alert("Congratulations! You Won!!");
        }
        else {
            alert("You Loose. Better Luck Next Time!!");
        }

        ResetGame();
    }

}

function ComputerSelection() {
    let SelectionArr = ["Rock","Paper","Scissor"];
    let randIndx = Math.floor(Math.random() * SelectionArr.length);
    return SelectionArr[randIndx];
}


rckBtn.addEventListener('click',function(e) {
   let compSelection = ComputerSelection();
   PlayRound('Rock',compSelection);
})

paperBtn.addEventListener('click',function(e) {
    let compSelection = ComputerSelection();
    PlayRound('Paper',compSelection); 
})

scrBtn.addEventListener('click',function(e) {
    let compSelection = ComputerSelection();
    PlayRound('Scissor',compSelection);
})