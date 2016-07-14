import React from 'react';
import App from '../App';
import Round from '../containers/round';

class Choice extends React.Component {

  validate(event) {
    event.preventDefault();
    let validationTest = this.props.validationTest
    // let Validation = this.refs.choiceValidation
    console.log(validationTest)
    // console.log(choiceValidation)
    console.log(this.refs.option)
  }



  render (){
    return (
      <div>
        <form ref={this.props.data.option} onSubmit={this.validate.bind(this)}>
        <button>{this.props.data.option}
        </button>
        </form>
      </div>
    );
  }

}

export default Choice;
