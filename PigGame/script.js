/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
const minRange = 1, maxRange = 6 // Dice contains number from 1-6
var gameStopped, overallScores, activePlayer, roundScore
init()

function init() {
    gameStopped = false
    overallScores = [0, 0]
    activePlayer = 0
    roundScore = 0
    
    document.querySelector('.dice').style.display = 'none' // Hide the dice
    
    document.getElementById('score-0').textContent = '0' // Reset the scores
    document.getElementById('score-1').textContent = '0'
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'

    document.getElementById('name-0').textContent = 'Player 1' // Reset the player names
    document.getElementById('name-1').textContent = 'Player 2'
    
    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner')
    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active')
    document.querySelector('.player-0-panel').classList.add('active')
}

function onClickNew() {

}

function onClickRoll() {

}

function onClickHold() {

}

function getRandom() {
    return Math.floor(Math.random() * maxRange) + minRange
}

document.querySelector('.btn-new').addEventListener('click', onClickNew)
document.querySelector('.btn-roll').addEventListener('click', onClickRoll)
document.querySelector('.btn-hold').addEventListener('click', onClickHold)