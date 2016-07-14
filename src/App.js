import React from 'react';
import Round from './containers/round'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      player1: null,
      player2: null,
      player1Draw: false,
      player2Draw: false,
      score: 0,
      roundTime: 20,
      round: 0,
      answer: {option: "Dog", image: "http://www.taiwanese-secrets.com/image-files/chinese-symbol-for-dog.jpg" },
      options: [
        { option: "Cat", image: "http://www.taiwanese-secrets.com/image-files/chinese-symbol-for-dog.jpg" },
        { option: "Dog", image: "http://www.taiwanese-secrets.com/image-files/chinese-symbol-for-dog.jpg"  },
        { option: "Rabbit", image: "http://www.taiwanese-secrets.com/image-files/chinese-symbol-for-dog.jpg"  },
        { option: "Horse", image: "http://www.taiwanese-secrets.com/image-files/chinese-symbol-for-dog.jpg"  },

      ]




    };

    console.log(this.state)
    console.log(this.state.player1Draw)
  }

    render() {
        return (
          <Round roundAnswer={this.state.answer} roundChoices={this.state.options}/>
        );
    }
}

export default App;
