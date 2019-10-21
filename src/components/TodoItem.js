import React, { Component } from "react";

class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#3792cb",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.passEachTodo.completed
        ? "line-through"
        : "none"
    };
  };

  getDelete = () => {
    return {
      background: "#ff0000",
      color: "#fff",
      border: "none",
      padding: "5px 9px",
      borderRadius: "50%",
      cursor: "pointer",
      float: "right"
    };
  };

  render() {
    return (
      <div style={this.getStyle()}>
        <input
          type="checkbox"
          onChange={this.props.markComplete2.bind(
            this,
            this.props.passEachTodo.id
          )}
        />
        {/* 'bind' is passing the id, up the tree to the App.js component!  */}
        <p>{this.props.passEachTodo.title}</p>
        <button
          style={this.getDelete()}
          onClick={this.props.deleteData2.bind(
            this,
            this.props.passEachTodo.id
          )}
        >
          x
        </button>
      </div>
    );
  }
}

export default TodoItem;
