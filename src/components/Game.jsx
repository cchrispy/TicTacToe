import React, { Component } from 'react';
import '../styles.scss';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-4">

          </div>
          <div className="col-xs-4">

          </div>
          <div className="col-xs-4">

          </div>
        </div>
        <div className="row">
          <div className="col-xs-4">

          </div>
          <div className="col-xs-4">

          </div>
          <div className="col-xs-4">

          </div>
        </div>
        <div className="row">
          <div className="col-xs-4">

          </div>
          <div className="col-xs-4">

          </div>
          <div className="col-xs-4">

          </div>
        </div>
      </div>
    )
  }
}

export default Game;