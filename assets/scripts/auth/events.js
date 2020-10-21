'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

let currentPlayer = 'X'
let gameIsOver = false

const checkConditions = (currentPlayer) => {
  if (store.game.cells[0] === currentPlayer && store.game.cells[1] ===
    currentPlayer && store.game.cells[2] === currentPlayer) {
    return true
  } else if (store.game.cells[0] === currentPlayer && store.game.cells[3] ===
  currentPlayer && store.game.cells[6] === currentPlayer) {
    return true
  } else if (store.game.cells[0] === currentPlayer && store.game.cells[4] ===
  currentPlayer && store.game.cells[8] === currentPlayer) {
    return true
  } else if (store.game.cells[1] === currentPlayer && store.game.cells[4] ===
  currentPlayer && store.game.cells[7] === currentPlayer) {
    return true
  } else if (store.game.cells[2] === currentPlayer && store.game.cells[5] ===
  currentPlayer && store.game.cells[8] === currentPlayer) {
    return true
  } else if (store.game.cells[3] === currentPlayer && store.game.cells[4] ===
  currentPlayer && store.game.cells[5] === currentPlayer) {
    return true
  } else if (store.game.cells[6] === currentPlayer && store.game.cells[7] ===
  currentPlayer && store.game.cells[8] === currentPlayer) {
    return true
  } else if (store.game.cells[2] === currentPlayer && store.game.cells[4] ===
  currentPlayer && store.game.cells[6]) {
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

  console.log('click')
  // Select the box that was clicked, event.target
  const box = $(e.target)
  console.log('e.target is ', e.target)
  const index = box.data('cellIndex')
  // only execute code below if empty square is clicked
  if (!box.text()) {
    $(e.target).text(currentPlayer)
    api.makeMove(index, currentPlayer, gameIsOver)
      .then(ui.onMakeMoveSuccess)
      .then(() => {
        if (checkConditions(currentPlayer)) {
          // let api and ui know about win
          console.log('Winner!')
        } else if (!store.game.cells.includes('')) {
          // game is a tie
          // let api and ui know
          console.log('this is a tie')
        } else {
          // game continues
          currentPlayer = currentPlayer === 'O' ? 'X' : 'O'
        }
      })
      .catch(ui.onMakeMoveFailure)
    // Change the current player
  }
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onStartGame,
  onCreateGame,
  onMove,
  // markBoard,
  updateGame,
  checkConditions,
  onChangePassword
}
