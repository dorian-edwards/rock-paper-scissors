let playerScore = 0
let cpuScore = 0
let gameActive = true
const display = document.querySelector('#display')
const playerScoreDisplay = document.querySelector('#playerScore')
const cpuScoreDisplay = document.querySelector('#cpuScore')
const selections = document.querySelectorAll('.playerChoice')
const start = document.querySelector('#start')

String.prototype.standard = function () {
  return this[0].toUpperCase() + this.slice(1).toLowerCase()
}

const computerPlay = () => {
  // randomly return rock, paper or scissor

  const playSelection = ['rock', 'paper', 'scissors']
  const index = Math.floor(Math.random() * 3)

  return playSelection[index]
}

const updateDisplay = (winner, winnerChoice, loserChoice) => {
  playerScoreDisplay.textContent = playerScore
  cpuScoreDisplay.textContent = cpuScore

  if (playerScore < 5 && cpuScore < 5) {
    return (display.textContent = `${winner} wins! ${winnerChoice.standard()} beats ${loserChoice.standard()}`)
  }

  let finalWinner = playerScore === 5 ? 'Player' : 'CPU'
  display.textContent = `${finalWinner} wins!`
  gameActive = false
}

// primary game logic
const playRound = (playerSelection, computerSelection) => {
  if (gameActive) {
    const pChoice = playerSelection.toLowerCase()
    const cChoice = computerSelection.toLowerCase()
    let playerWins

    if (pChoice === cChoice) {
      display.textContent = 'Tie round.'
      return
    }
    if (pChoice === 'rock') {
      if (cChoice === 'scissors') playerWins = true
      if (cChoice === 'paper') playerWins = false
    } else if (pChoice === 'paper') {
      if (cChoice === 'rock') playerWins = true
      if (cChoice === 'scissors') playerWins = false
    } else if (pChoice === 'scissors') {
      if (cChoice === 'paper') playerWins = true
      if (cChoice === 'rock') playerWins = false
    }

    if (playerWins) {
      playerScore++
      return updateDisplay('Player', pChoice, cChoice)
    }
    if (!playerWins) {
      cpuScore++
      return updateDisplay('CPU', cChoice, pChoice)
    }
  }
}

selections.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.name, computerPlay())
  })
})
