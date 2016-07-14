import React from 'react'
import Choice from '../components/choice'

class Assignment extends React.Component {

  renderDrawAssignment() {
      return (
        <div>
          <p> Draw a: {this.props.assignment} </p>
        </div>
    );
  }

  renderguessChoices() {
    return (
      <div>
        {this.props.guesserAnswers.map((choice) =>{
          return <Choice key={choice._id} { ...choice } />
        })}
      </div>
    );
  }



  render() {
    let player1 = this.props.draw;
    console.log(player1);


    if (player1 === true) {
      return this.renderDrawAssignment();

    } return this.renderguessChoices();

  }

}

export default Assignment;
