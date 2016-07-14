import React from 'react';
import Choice from '../components/choice';
import Answer from '../components/answer';

class Round extends React.Component {


  renderRoundChoices() {
    return (
      <div>
        <div>
          {this.props.roundChoices.map((choice) => {
             return <Choice key={choice._id} data={choice} />
        })}
        </div>

        <div>
          {this.props.roundChoices.map((answer) => {
             return <Answer key={answer._id} data={answer} />
        })}
        </div>
      </div>

    );
  }


  render() {

     return this.renderRoundChoices();

  }

}

export default Round;
