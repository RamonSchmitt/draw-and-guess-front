import React from 'react';
import Header from './components/header';
import Round from './containers/round';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      player1: null,
      player2: null,
      score: 0,
      roundTime: 20,
      round: 1,
      beginRound: false,
      answer: null,
      options: [
              { option: "Cat", image: "http://1.bp.blogspot.com/-KuQX1Jiukno/VEa3tE1oDAI/AAAAAAAAdD8/0MB0jBJ2KTI/s1600/cat.gif" },
              { option: "Dog", image: "http://www.taiwanese-secrets.com/image-files/chinese-symbol-for-dog.jpg"  },
              { option: "Rabbit", image: "http://chinesecalligraphystore.com/chinese-zodiac-signs/chinese-zodiac-signs-400x/chinese-zodiac-sign-rabbit.gif"  },
              { option: "Horse", image: "http://scifiportal.eu/wp-content/uploads/2014/01/chinese-zodiac-sign-horse.gif"  },
      ]
    };
  }


  startGame(event) {
    event.preventDefault();
    let possibleAnswers = this.state.options
    let newAnswer = possibleAnswers[Math.floor(Math.random()*possibleAnswers.length)];




    this.setState ({
      answer: newAnswer,
      beginRound: true
    })




    }


    render() {

      if (this.state.beginRound == false) {
        return <button onClick={this.startGame.bind(this)}> Start Game </button>

      } return (

      <div>
        <Header/>
        <Round roundChoices={this.state.options}/>
      </div>

    )



    }

}

export default App;
