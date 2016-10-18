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

  changeUser() {
    this.setState({
      current: this.state.current === 'X' ? 'O' : 'X'
    });
  }

  render() {
    return (
      <div>
        <Game name={ this.state.current } changeUser={ this.changeUser.bind(this) } />
        <Player name={ this.state.current } />
      </div>
    )
  }
};

export default App;