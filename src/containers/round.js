import React from 'react'
import Choice from '../components/choice'

class Round extends React.Component {

  // renderDrawAssignment() {
  //     return (
  //       <div>
  //         <p> Draw a: {this.props.assignment} </p>
  //       </div>
  //   );
  // }

  renderRoundChoices() {
    return (
      <div>
        {this.props.roundChoices.map((choice) =>{
          return <Choice key={choice._id} { ...choice } />
        })}
      </div>
    );
  }



  render() {
    // let player1 = this.props.draw;
    // console.log(player1);


    // if (player1 === true) {
    //   return this.renderDrawAssignment();
     return this.renderRoundChoices();

  }

}

export default Round;
