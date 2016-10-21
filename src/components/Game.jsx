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
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-4 square" onClick={ () => {
            this.markSquare('one');
            this.props.changeUser(); 
          }} >
            { this.state.one }
          </div>
          <div className="col-xs-4 square" onClick={ () => {
            this.markSquare('two');
            this.props.changeUser(); 
          }} >
            { this.state.two }
          </div>
          <div className="col-xs-4 square" onClick={ () => {
            this.markSquare('three');
            this.props.changeUser(); 
          }} >
            { this.state.three }
          </div>
        </div>
        <div className="row">
          <div className="col-xs-4 square" onClick={ () => {
            this.markSquare('four');
            this.props.changeUser(); 
          }} >
            { this.state.four }
          </div>
          <div className="col-xs-4 square" onClick={ () => {
            this.markSquare('five');
            this.props.changeUser(); 
          }} >
            { this.state.five }
          </div>
          <div className="col-xs-4 square" onClick={ () => {
            this.markSquare('six');
            this.props.changeUser(); 
          }} >
            { this.state.six }
          </div>
        </div>
        <div className="row">
          <div className="col-xs-4 square" onClick={ () => {
            this.markSquare('seven');
            this.props.changeUser(); 
          }} >
            { this.state.seven }
          </div>
          <div className="col-xs-4 square" onClick={ () => {
            this.markSquare('eight');
            this.props.changeUser(); 
          }} >
            { this.state.eight }
          </div>
          <div className="col-xs-4 square" onClick={ () => {
            this.markSquare('nine');
            this.props.changeUser(); 
          }} >
            { this.state.nine }
          </div>
        </div>
      </div>
    )
  }
}

export default Game;