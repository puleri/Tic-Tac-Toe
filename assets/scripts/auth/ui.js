'use strict'
const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').text('Thanks for signing up ' + response.user.email)
}
const onSignInSuccess = function (response) {
  $('#message').text(response.user.email + ' is now signed in.')
  // const user = store.user
  store.user = response.user
}
const onChangePasswordSuccess = function () {
  $('#message').text('You have successfully changed your password.')
  $('#change-password').trigger('reset')
}
const onSignOutSuccess = function () {
  $('#message').text('You are now signed out!')
}
const onError = function (error) {
  $('#message').text('There was an error. Check spelling and try again.')
  console.log(error)
}
const onStartGameSuccess = function () {
  $('.ttt-board').css('display', 'block')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onStartGameSuccess,
  onError
}
