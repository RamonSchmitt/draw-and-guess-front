import React from 'react'

class Choice extends React.Component {


render() {
  console.log(this.props.data);
  return (
    <img src = {this.props.data.image} />

  );

}



}

export default Choice;
