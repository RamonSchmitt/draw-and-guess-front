import React from 'react';
import Assignment from './containers/assignment-cont'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      player1: null,
      player2: null,
      player1Draw: true,
      player2Draw: false,
      score: 0,
      roundTime: 20,
      round: 0,
      drawAssignment: "Dog",
      guessChoices: [
        { answer: "Cat" },
        { answer: "Dog" },
        { answer: "Rabbit" },
        { answer: "Horse" },
      ]




    };

    console.log(this.state)
    console.log(this.state.player1Draw)
  }

    render() {
        return (
          <Assignment draw={this.state.player1Draw} assignment={this.state.drawAssignment}/>
        );
    }
}

export default App;
