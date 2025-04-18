    let savedScore = localStorage.getItem("score");
    let score = JSON.parse(savedScore) ||{
        win: 0,
        lose: 0,
        tie: 0
    }
      

    let computerChoice;
    function genCompChoice(){
      let randomNum = Math.random()*3;
      if(randomNum<=1)
        computerChoice = 'BAT';
      else if (randomNum>1 && randomNum<=2)
        computerChoice='BALL';
      else
        computerChoice='STUMP';
    }

    function updateScore() {
      document.getElementById('wins').textContent = score.win;
      document.getElementById('losses').textContent = score.lose;
      document.getElementById('ties').textContent = score.tie;
      localStorage.setItem("score", JSON.stringify(score));
    }

    let result;

    function choiceIsBat(){
      if (computerChoice==='BAT'){
        result = `TIE`;
        score.tie++;
      }
      else if (computerChoice==='BALL'){
        result = 'You WIN';
        score.win++;
      }
      else if (computerChoice==='STUMP'){
        result = 'You LOST';
        score.lose++;
      }
      showResult('BAT', computerChoice, result);
    }

    function choiceIsBowl(){
      if (computerChoice==='BAT'){
        result = 'You LOST';
        score.lose++;
      }
      else if (computerChoice==='BALL'){
        result = `TIE`;
        score.tie++;
      }
      else if (computerChoice==='STUMP'){
        result = 'You WON';
        score.win++;
      }
      showResult('BALL', computerChoice, result);
    }

    function choiceIsStump(){
      if (computerChoice==='BAT'){
        result = 'You WON';
        score.win++;
      }
      else if (computerChoice==='BALL'){
        result = 'You LOST';
        score.lose++;
      }
      else if (computerChoice==='STUMP'){
        result = `TIE`;
        score.tie++;
      }
      showResult('STUMP', computerChoice, result);
    }

    function updateImages(playerChoice, compChoice) {
      const playerImg = document.querySelector('#player-choice');
      const computerImg = document.querySelector('#computer-choice');
      
      playerImg.src = `${playerChoice.toLowerCase()}.jpg`;
      computerImg.src = `${compChoice.toLowerCase()}.jpg`;
      
      playerImg.style.display = 'block';
      computerImg.style.display = 'block';
    }

    function showResult(myChoice, computerChoice, result) {
      updateScore();
      updateImages(myChoice, computerChoice);
      const display = document.querySelector('#display');
      display.style.display = 'block';
      display.textContent = result;
    }

    function resetScore() {
      score = {
        win: 0,
        lose: 0,
        tie: 0
      };
      updateScore();
      document.querySelector('#display').style.display = 'none';
      document.querySelector('#player-choice').style.display = 'none';
      document.querySelector('#computer-choice').style.display = 'none';
    }

    updateScore();