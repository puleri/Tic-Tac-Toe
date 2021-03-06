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
  $('.box').on('click', events.updateGame)
  $('#show-games').on('click', events.showGames)
  $('#has-account').on('click', events.showSignIn)
  $('#no-account').on('click', events.showSignUp)
  $('.show-change-password').on('click', events.showChangePassword)
  $('.taken').on('click', events.takenBox)
})
