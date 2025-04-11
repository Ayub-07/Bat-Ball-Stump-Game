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
        result = `It's a TIE`;
        score.tie++;
      }
      else if (computerChoice==='BALL'){
        result = 'Congo !!! You won.';
        score.win++;
      }
      else if (computerChoice==='STUMP'){
        result = 'You lost Gentleman';
        score.lose++;
      }
      showResult('BAT', computerChoice, result);
    }

    function choiceIsBowl(){
      if (computerChoice==='BAT'){
        result = 'You lost Gentleman';
        score.lose++;
      }
      else if (computerChoice==='BALL'){
        result = `It's a TIE`;
        score.tie++;
      }
      else if (computerChoice==='STUMP'){
        result = 'Congo !!! You won.';
        score.win++;
      }
      showResult('BALL', computerChoice, result);
    }

    function choiceIsStump(){
      if (computerChoice==='BAT'){
        result = 'Congo !!! You won.';
        score.win++;
      }
      else if (computerChoice==='BALL'){
        result = 'You lost Gentleman';
        score.lose++;
      }
      else if (computerChoice==='STUMP'){
        result = `It's a TIE`;
        score.tie++;
      }
      showResult('STUMP', computerChoice, result);
    }

    function showResult(myChoice, computerChoice, result) {
      updateScore();
      const display = document.querySelector('#display');
      display.style.display = 'block';
      display.textContent = `Your choice is ${myChoice}. Computer's choice is ${computerChoice}. ${result}.`;
    }

    function resetScore() {
      score = {
        win: 0,
        lose: 0,
        tie: 0
      };
      updateScore();
      document.querySelector('#display').style.display = 'none';
    }

    updateScore();