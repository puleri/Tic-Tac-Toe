'use strict'
const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').text('Thanks for signing up ' + response.user.email + '. Please, sign in!')
  $('#sign-in').css('display', 'block')
  $('#sign-up').trigger('reset')
  $('#sign-up').css('display', 'none')
  $('#has-account').css('display', 'none')
  $('#no-account').css('display', 'block')
}
const onSignInSuccess = function (response) {
  $('#once-signed-in').text('Hello ' + response.user.email + '. You are currently signed in.')
  $('#sign-in').trigger('reset')
  $('#sign-in').css('display', 'none')
  $('#sign-out').css('display', 'block')
  $('.start-game').css('display', 'block')
  $('.show-games').css('display', 'block')
  $('#no-account').css('display', 'none')
  $('.show-change-password').css('display', 'block')
  // const user = store.user
  store.user = response.user
}
const onChangePasswordSuccess = function () {
  $('#message').text('You have successfully changed your password.')
  $('#change-password').trigger('reset')
}
const onSignOutSuccess = function () {
  $('#message').text('You are now signed out!')
  $('#sign-out').css('display', 'none')
  $('#change-password').css('display', 'none')
  $('.start-game').css('display', 'none')
  $('.show-games').css('display', 'none')
  $('#sign-in').css('display', 'block')
  $('#no-account').css('display', 'block')
  $('.show-change-password').css('display', 'none')
  $('.ttt-board').css('display', 'none')
  $('.game-index').text('')
  $('.end-game').text('')
}
const onError = function (error) {
  $('#message').text('Check spelling and try again.')
    .catch(error)
}
const onStartGameSuccess = function (response) {
  $('.ttt-board').css('display', 'block')
  $('.ttt-board').css('padding-top', '60px')
  $('.box').css('pointer-events', 'auto')
  $('.box').text('')
  $('.end-game').text('')
  store.game = response.game
}
const onMakeMoveSuccess = function (response) {
  store.game = response.game
  // console.log('onMakeMoveSuccess response.game.cells is ', response.game.cells)
}
const onMakeMoveFailure = function (event) {
  $('#message').text('That is not a possible move.')
}
const onShowGamesSuccess = function (res) {
  // console.log(res.games)
  const games = res.games
  $('.game-index').text('You have played ' + games.length + ' games.')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onStartGameSuccess,
  onMakeMoveSuccess,
  onMakeMoveFailure,
  onShowGamesSuccess,
  onError
}
