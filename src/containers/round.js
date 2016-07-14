import React from 'react';
import Choice from '../components/choice';
import Answer from '../components/answer';

class Round extends React.Component {


  generateAnswer() {
    let possibleAnswers = this.props.roundChoices
    console.log(possibleAnswers)
    let picked = Math.round(Math.random()*possibleAnswers.length-1)
    console.log(picked)
    let newAnswer = this.props.roundChoices[picked].image;
    console.log(newAnswer)
    let answerValidation = this.props.roundChoices[picked].option;

    return (
      <div>

        <div>
          <img src = {this.props.roundChoices[picked].image}/>
        </div>

        <div>
          {this.props.roundChoices.map((choice) => {
             return <Choice key={choice._id} data={choice} validation={answerValidation} />
           })}
        </div>

      </div>


    )
  }







  render() {

      return this.generateAnswer();

  }

}

export default Round;
