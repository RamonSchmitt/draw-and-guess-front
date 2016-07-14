import React from 'react';
<<<<<<< HEAD
import CanvasCont from './containers/canvas-cont';
||||||| merged common ancestors
=======
import Round from './containers/round'
>>>>>>> a885641c4da4904d7b5ff9779df4ff16ba1f0a74

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
<<<<<<< HEAD
            <h1>Hello World!</h1>
            <CanvasCont/>
||||||| merged common ancestors
            <h1>Hello World!</h1>
=======
          <Round roundAnswer={this.state.answer} roundChoices={this.state.options}/>
>>>>>>> a885641c4da4904d7b5ff9779df4ff16ba1f0a74
        );
    }
}

export default App;
