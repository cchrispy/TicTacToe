import React, { Component } from 'react';
import '../styles.scss';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      one: '',
      two: '',
      three: '',
      four: '',
      five: '',
      six: '',
      seven: '',
      eight: '',
      nine: ''
    };
  }

  markSquare(square) {
    this.setState({
      [square]: this.props.name
    });
    this.props.changeUser();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-4 square" onClick={ () => {
            if (!this.state['one']) {
              this.markSquare('one');
            }
          }} >
            { this.state.one }
          </div>
          <div className="col-xs-4 square" onClick={ () => {
            if (!this.state['two']) {
              this.markSquare('two');
            }
          }} >
            { this.state.two }
          </div>
          <div className="col-xs-4 square" onClick={ () => {
            if (!this.state['three']) {
              this.markSquare('three');
            }
          }} >
            { this.state.three }
          </div>
        </div>
        <div className="row">
          <div className="col-xs-4 square" onClick={ () => {
            if (!this.state['four']) {
              this.markSquare('four');
            }
          }} >
            { this.state.four }
          </div>
          <div className="col-xs-4 square" onClick={ () => {
            if (!this.state['five']) {
              this.markSquare('five');
            }
          }} >
            { this.state.five }
          </div>
          <div className="col-xs-4 square" onClick={ () => {
            if (!this.state['six']) {
              this.markSquare('six');
            }
          }} >
            { this.state.six }
          </div>
        </div>
        <div className="row">
          <div className="col-xs-4 square" onClick={ () => {
            if (!this.state['seven']) {
              this.markSquare('seven');
            }
          }} >
            { this.state.seven }
          </div>
          <div className="col-xs-4 square" onClick={ () => {
            if (!this.state['eight']) {
              this.markSquare('eight');
            }
          }} >
            { this.state.eight }
          </div>
          <div className="col-xs-4 square" onClick={ () => {
            if (!this.state['nine']) {
              this.markSquare('nine');
            }
          }} >
            { this.state.nine }
          </div>
        </div>
      </div>
    )
  }
}

export default Game;