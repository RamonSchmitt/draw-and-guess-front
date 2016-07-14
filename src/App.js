import React from 'react';
import Round from './containers/round'

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
        { option: "Cat", image: "http://www.taiwanese-secrets.com/image-files/chinese-symbol-for-dog.jpg" },
        { option: "Dog", image: "http://www.taiwanese-secrets.com/image-files/chinese-symbol-for-dog.jpg"  },
        { option: "Rabbit", image: "http://www.taiwanese-secrets.com/image-files/chinese-symbol-for-dog.jpg"  },
        { option: "Horse", image: "http://www.taiwanese-secrets.com/image-files/chinese-symbol-for-dog.jpg"  },

      ]
    };
  }

  // generateAnswer() {
  //   let possibleAnswers = this.state.options
  //   let newAnswer = possibleAnswers[Math.floor(Math.random()*possibleAnswers.length)];
  //
  //   this.setState({
  //     answer: newAnswer,
  //     beginRound: true
  //   })
  //   console.log(this.state.answer)
  //
  // }

  // renderAnswer() {
  //   return (
  //     <div>
  //       {this.state.answer.map((roundAnswer) => {
  //         return <Answer key={roundAnswer._id} data={roundAnswer} />
  //       })}
  //     </div>
  //   )
  // }

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

      } return <Round roundAnswer={this.state.answer} roundChoices={this.state.options}/>

      console.log("Begin Round = ", this.state.beginRound, "Answer", this.state.answer )

    }

}

export default App;



// return (
//
// );
