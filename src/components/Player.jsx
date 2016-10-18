import React, { Component } from 'react';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>{ `Player ${ this.props.name }'s turn` }</h2>
      </div>
    )
  }
}

export default Player;