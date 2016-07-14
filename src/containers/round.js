import React from 'react';
import Choice from '../components/choice';
import Answer from '../components/answer';
import Timer from '../components/timer';

class Round extends React.Component {


  generateAnswer() {
    let possibleAnswers = this.props.roundChoices
    console.log(possibleAnswers)
    let picked = Math.round(Math.random()*possibleAnswers.length)
    console.log(picked)
    let newAnswer = this.props.roundChoices[picked].image;
    console.log(newAnswer)
    return (
      <div style={{width: "100%", backgroundColor: "#ddd", padding: "24", margin: "0"}}>
      <div style={{width: "60%", margin: "0 auto"}}>
      <Timer/>
        <div>
          <img src = {this.props.roundChoices[picked].image}/>
        </div>

        <div>
          {this.props.roundChoices.map((choice) => {
             return <Choice key={choice._id} data={choice} />
           })}
        </div>
        </div>

      </div>


    )
  }







  render() {

      return this.generateAnswer();

  }

}

export default Round;
