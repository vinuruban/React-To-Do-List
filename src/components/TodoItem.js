import React, { Component } from 'react';


class TodoItem extends Component {

  getStyle = () => {
    return {
      background: "#3792cb",
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.passEachTodo.completed ? 'line-through' : 'none'
    }
  }
  render() {
    return (
      <div style={this.getStyle()} >
        <input type="checkbox" onChange={this.props.markComplete2}/>
        <p>{this.props.passEachTodo.title}</p>
      </div>
    )
  }
}

export default TodoItem;