import React, { Component } from "react";
import TodoItem from "./TodoItem";

class Todos extends Component {
  render() {
    return this.props.todosParam.map(listins => (
      // ^^ for each to-do that we map through, show their title one by one!!!
      <TodoItem
        key={listins.id}
        passEachTodo={listins}
        markComplete2={this.props.markComplete1}
        deleteData2={this.props.deleteData1}
      />
      // ^^ this "listins" is passing down props.title[1], props.title[2], props.title[3], at 3 different times
    ));
  }
}

export default Todos;
