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
          <div className="col-xs-4 one" onClick={ this.props.changeUser } >

          </div>
          <div className="col-xs-4 two" onClick={ this.props.changeUser } >

          </div>
          <div className="col-xs-4 three" onClick={ this.props.changeUser } >

          </div>
        </div>
        <div className="row">
          <div className="col-xs-4 four" onClick={ this.props.changeUser } >

          </div>
          <div className="col-xs-4 five" onClick={ this.props.changeUser } >

          </div>
          <div className="col-xs-4 six" onClick={ this.props.changeUser } >

          </div>
        </div>
        <div className="row">
          <div className="col-xs-4 seven" onClick={ this.props.changeUser } >

          </div>
          <div className="col-xs-4 eight" onClick={ this.props.changeUser } >

          </div>
          <div className="col-xs-4 nine" onClick={ this.props.changeUser } >

          </div>
        </div>
      </div>
    )
  }
}

export default Game;