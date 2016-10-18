import React, { Component } from 'react';
import Game from './Game.jsx';
import Player from './Player.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'X'
    };
  }

  render() {
    return (
      <div>
        <Game />
        <Player name={ this.state.current } />
      </div>
    )
  }
};

export default App;