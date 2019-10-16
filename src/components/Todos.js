import React, { Component } from 'react';


class Todos extends Component {

  render() {
    console.log(this.props.tod)
    return (
      <div className="a">
        <h1>To-do</h1>
      </div>
    );
  }
}

export default Todos;