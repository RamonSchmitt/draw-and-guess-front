
import React from 'react'


class Choice extends React.Component {
  constructor() {
    super();

}

render() {
  console.log(this.props.data);
  return (
    <button>
      {this.props.data.option}
    </button>
  );

}



}

export default Choice;
