'use strict'
const config = require('./../config')
const store = require('./../store')

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
const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + 'change-password',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: data
  })
}
const signOut = function () {
  return $.ajax({
    url: config.apiUrl + 'sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
