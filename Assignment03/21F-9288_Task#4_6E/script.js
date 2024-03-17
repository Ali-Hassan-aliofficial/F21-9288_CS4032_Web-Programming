$(document).ready(function() {
    let playerScore = 0;
    let computerScore = 0;
  
    $('.btn').click(function() {
      const playerChoice = $(this).data('choice');
      const computerChoice = generateComputerChoice();
      const result = determineWinner(playerChoice, computerChoice);
      
      $('#result').text(result);
  
      if (result.includes('Win')) {
        playerScore++;
      } else if (result.includes('Lose')) {
        computerScore++;
      }
  
      $('#player-score').text(playerScore);
      $('#computer-score').text(computerScore);
    });
  
    function generateComputerChoice() {
      const choices = ['rock', 'paper', 'scissors'];
      return choices[Math.floor(Math.random() * choices.length)];
    }
  
    function determineWinner(player, computer) {
      if (player === computer) {
        return 'It\'s a tie!';
      } else if ((player === 'rock' && computer === 'scissors') ||
                 (player === 'paper' && computer === 'rock') ||
                 (player === 'scissors' && computer === 'paper')) {
        return 'You Win!';
      } else {
        return 'You Lose!';
      }
    }
  });
  