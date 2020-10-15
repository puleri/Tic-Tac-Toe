'use strict'
const config = require('./../config')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + 'sign-up',
    method: 'POST',
    data: data
  })
}
// make sure to not have a back slash before sign-in or sign-up. gives
// 404 message if you do.
// testing with email: qw@aw.co and password: 1   ...which is working for now
const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + 'sign-in',
    method: 'POST',
    data: data
  })
}
module.exports = {
  signUp,
  signIn
}
