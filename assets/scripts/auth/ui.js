'use strict'

const onSignUpSuccess = function (response) {
  $('#message').text('Thanks for signing up ' + response.user.email)
}
const onSignInSuccess = function (response) {
  $('#message').text(response.user.email + ' is now signed in.')
}
const onError = function (error) {
  $('#message').text('There was an error. Check spelling and try again.')
  console.log(error)
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onError
}
