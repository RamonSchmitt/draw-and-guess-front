
import React from 'react'


class Choice extends React.Component {


render() {
  return (
    <button>
      {this.props.data.option}
    </button>
  );

}



}

export default Choice;
