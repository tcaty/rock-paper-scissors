import React from 'react';

import Player from '../player';

import './game.css';


export default class Game extends React.Component {
  state = {
    player1: { name: null, wins: null },
    player2: { name: null, wins: null },
  };

  getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  makeChoice = () => {
    const choices = [
      { name: "rock", wins: "scissors" },
      { name: "paper", wins: "rock" },
      { name: "scissors", wins: "paper" }
    ];
    const player1 = this.getRandomElement(choices);
    const player2 = this.getRandomElement(choices);

    this.setState({
      player1,
      player2,
    });
  };

  calculateWinner = () => {
    const { player1, player2 } = this.state;
    
    if (player1.name === null) {
      return "Let's play!";
    }
    else if (player1.name === player2.name) {
      return "It is draw";
    }
    else if (player1.wins === player2.name) {
      return "The winner is Player 1";
    }
    else {
      return "The winner is Player 2";
    }
  };

  render() {

    const { player1, player2 } = this.state;

    return (
      <div className="game">
        <h1 className="game__title">Rock paper scissors</h1>
        <div className="game__result-panel">{ this.calculateWinner() }</div>
        <div className="game__player game__player-1">
          <Player choice={ player1.name } isWinner={ player1.wins === player2.name && player1.name != null }/>
          <div className="game__player-name game__player-name-1">Player 1</div>
        </div>
        <div className="game__player game__player-2">
          <Player choice={ player2.name } isWinner={ player2.wins === player1.name && player1.name != null }/>
          <div className="game__player-name game__player-name-2">Player 2</div>
        </div>
        <button onClick={ this.makeChoice } className="game__btn">Play</button>
      </div>
    )
  }
}