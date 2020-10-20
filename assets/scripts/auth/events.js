'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

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
const markBoard = function () {
  event.preventDefault()
  console.log(event.target.innerHTML)

  // if event.target.innerHTML = 'X' {}
  // else {}

  // $(event.target).text('X')
}
//
// const gameOver = false
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onStartGame,
  onCreateGame,
  onMove,
  markBoard,
  onChangePassword
}
