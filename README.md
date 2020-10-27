# Tic-Tac-toe Application

## Technologies Used:

Built on ATOM, this application utilises HTML, SCSS,
JavaScript, and an API. This project was done entirely
on a Macbook Pro. Research for the project was done with peers, on W3,
and on StackOverflow.

## Planning and Execution:

Before coding the application, a plan was set in place to
set up the repository, browser template, and deploy to GH
Pages. Next I would begin coding the Token Authentication, the New Game
API call, a simple board design, click handlers for when the user
interacts with the board, the game engine, and game logic.

Coding the game logic I first used a function that checked for winning
box positions to be matching, but upon testing found that empty boxes
were also considered winning conditions. The intended result was
accomplished by adding a check to make sure the boxes were not empty.
I solved this problem and problems like it often by consulting peers
and when possible finding solutions online.

## Future of the application

Features to be created for the application include an overhaul on the
ui/ux, such as a picture of a cat to be displayed when the players
achieve a 'cats game' (known more commonly as a 'tie-game'). More
utiliy to be added might include a stats displayer to compliment
the show-games feaure. I also could not figure out how to
tell the user the space they clicked had already been taken.
I believe this is due to the way I made boxes unclickable after being
taken (removing event listeners).

## Wireframe

[! Wireframe for User, new user, start game, playable game, and outcome](https://imgur.com/a/PfHEJ4n)

## User Stories

As a user, I want to be able to play against a computer, so that I can play alone.

As a user, I want to be able to make an account, so I can save my wins and losses.

As a user, I want to be able to play locally so I can play against another player.

As a creator, I want to be able to invite friends by sending them a URL so that they can access the game.

As a player, I want to be able to join a game using a URL so that I can access the game.

As a user, I want to log in using my username and password so that I can start using the application.

As a user, I want to change my log in so I can keep my information up to date.
