String.prototype.standard = function () {
  return this[0].toUpperCase() + this.slice(1).toLowerCase()
}

const computerPlay = () => {
  // randomly return rock, paper or scissor

  const playSelection = ['rock', 'paper', 'scissors']
  const index = Math.floor(Math.random() * 3)

  return playSelection[index]
}

// primary game logic
const playRound = (playerSelection, computerSelection) => {
  const pChoice = playerSelection.toLowerCase()
  const cChoice = computerSelection.toLowerCase()
  let playerWins

  if (pChoice === cChoice) {
    console.log('Tie round.')
    return -1
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
    console.log(
      `Player wins. ${pChoice.standard()} beats ${cChoice.standard()}.`
    )
  } else {
    console.log(`CPU wins. ${cChoice.standard()} beats ${pChoice.standard()}.`)
  }

  return playerWins
}

// game should play five rounds and return the winner
const game = () => {
  let playerWins = 0
  let cpuWins = 0

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt('Please select rock, paper, or scissors.')
    let computerSelection = computerPlay()
    let playerWon = playRound(playerSelection, computerSelection)
    if (playerWon !== -1 && playerWon) playerWins++
    if (playerWon !== -1 && !playerWon) cpuWins++
  }

  if (playerWins === cpuWins) return console.log('Tie Game')
  console.log(`${playerWins > cpuWins ? 'Player' : 'CPU'} wins!`)
  console.log(`Final score: \nPlayer: ${playerWins} CPU: ${cpuWins}`)
}
