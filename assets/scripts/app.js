'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./auth/events')

$(() => {
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('submit', events.onChangePassword)
  $('#sign-out').on('submit', events.onSignOut)
  $('#start-game').on('click', events.onStartGame)
  $('.box').on('click', events.onMove)
  $('.box').on('click', events.markBoard)

  let currentPlayer = 'X'

  const gameBoard = ['', '', '', '', '', '', '', '', '']

  const onBoxClick = (event) => {
    console.log('click')
    // Select the box that was clicked, event.target
    const box = $(event.target)
    const index = box.data('data-cell-index')
    // only execute code below if empty square is clicked
    if (!box.text()) {
      // If the value at “index” in the gameBoard array ===“”, I should “return” and do nothing
      gameBoard[index] = currentPlayer
      console.log(gameBoard)
      // Then set the text to the current player
      box.text(currentPlayer)
      // Change the current player
      currentPlayer = currentPlayer === 'O' ? 'X' : 'O'
    }
  }
  $('.box').on('click', onBoxClick)
})
