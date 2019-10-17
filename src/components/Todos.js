import React, { Component } from 'react';


class Todos extends Component {

  render() {
    return this.props.todosParam.map((listins) => (
                <li> {listins.title} </li>
            ));
  }
}

export default Todos;