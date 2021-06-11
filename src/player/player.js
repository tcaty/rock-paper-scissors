import React from 'react';

import './player.css';


const Player = ({ choice, isWinner }) => {

  let classNames = ["player"];
  
  classNames.push("player_" + choice);

  if (isWinner) {
    classNames.push("player_winner");
  }

  return (
    <div className={ classNames.join(' ') }>
    </div>
  );
};


export default Player;