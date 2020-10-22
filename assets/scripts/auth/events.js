'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

let currentPlayer = 'X'
const gameIsOver = false

const checkConditions = (currentPlayer) => {
  const gameCells = store.game.cells
  if (gameCells[0] !== '' && gameCells[0] === gameCells[1] && gameCells[2] === gameCells[0]) {
    // console.log('win 1 type')
    return true
  } else if (gameCells[0] !== '' && gameCells[0] === gameCells[3] && gameCells[6] === gameCells[0]) {
    // console.log('win 2 type')
    return true
  } else if (gameCells[0] !== '' && gameCells[0] === gameCells[4] && gameCells[8] === gameCells[0]) {
    // console.log('win 3 type')
    return true
  } else if (gameCells[1] !== '' && gameCells[1] === gameCells[4] && gameCells[7] === gameCells[1]) {
    // console.log('win 4 type')
    return true
  } else if (gameCells[2] !== '' && gameCells[2] === gameCells[5] && gameCells[8] === gameCells[2]) {
    // console.log('win 5 type')
    return true
  } else if (gameCells[3] !== '' && gameCells[3] === gameCells[4] && gameCells[5] === gameCells[3]) {
    // console.log('win 6 type')
    return true
  } else if (gameCells[6] !== '' && gameCells[6] === gameCells[7] && gameCells[6] === gameCells[8]) {
    // console.log('win 7 type')
    return true
  } else if (gameCells[2] !== '' && gameCells[2] === gameCells[4] && gameCells[2] === gameCells[6]) {
    // console.log('win 8 type')
    return true
  } else return false
}

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onError)
}
const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onError)
}
const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onError)
}
const onSignOut = function (data) {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onError)
}

const onStartGame = function (event) {
  event.preventDefault()

  api.startGame()
    .then(ui.onStartGameSuccess)
    .catch(ui.onError)
}
const onCreateGame = function (event) {
  event.preventDefault()

  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onError)
}
const onMove = function (event) {
  event.preventDefault()
  // console.log('move made')
  // console.log('event is ', event)
  // get which users turn it is
  // get which position they clicked
  // send that data to the api

  api.makeMove()
    .then(ui.onMakeMoveSuccess)
    .catch(ui.onMakeMoveFailure)
}
// const markBoard = function () {
//   event.preventDefault()
// }

const updateGame = e => {
  e.preventDefault()

  // console.log('Click! Game array is ', store.game)
  const box = $(e.target)
  // console.log('e.target is ', e.target)
  const index = box.data('cellIndex')
  // only execute code below if empty square is clicked
  if (!box.text()) {
    $(e.target).text(currentPlayer)
    api.makeMove(index, currentPlayer, gameIsOver)
      .then(ui.onMakeMoveSuccess)
      // check out what this function is doing and try nesting it in on
      // onMakeMoveSuccess
      .then(() => {
        if (checkConditions(currentPlayer)) {
          // let api and ui know about win
          // console.log('Winner!')
          $('.box').css('pointer-events', 'none')
        } else if (!store.game.cells.includes('')) {
          // game is a tie
          // let api and ui know
          // console.log('this is a tie')
          $('.box').css('pointer-events', 'none')
        } else {
          // game continues
          // console.log('turn was made. changing players')
          currentPlayer = currentPlayer === 'O' ? 'X' : 'O'
        }
      })
      .catch(ui.onMakeMoveFailure)
    // Change the current player
  }
}
const showGames = function (event) {
  event.preventDefault()

  api.showGames()
    .then(ui.onShowGamesSuccess)
    .catch(ui.onError)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onStartGame,
  onCreateGame,
  onMove,
  updateGame,
  checkConditions,
  showGames,
  onChangePassword
}
