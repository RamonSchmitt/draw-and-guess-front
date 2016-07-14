import React from 'react'

class Choice extends React.Component {


  generateAnswer() {
    let possibleAnswers = this.props.data
    console.log(possibleAnswers)
    let picked = Math.round(Math.random()*possibleAnswers.length -1)
    console.log(picked)
    let newAnswer = possibleAnswers[picked].image;
    console.log(newAnswer)
    return (
      <div>
        <img src = {this.newAnswer}/>
      </div>
    )
  }

  render() {
    return this.generateAnswer();
    }
  //



}
// <img src = {this.props.data.image} />

export default Choice;
