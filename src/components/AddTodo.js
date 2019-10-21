import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    title: ""
  };

  atChange = e => this.setState({ title: e.target.value });
  // this func sets the title to be whatever is being typed in the AddTodo input field

  atSubmit = e => {
    e.preventDefault();
    this.props.addData1(this.state.title);
    this.setState({ title: "" });
    //the title from this state is taken and passed as parameter into the props. the title is then reset to ""
  };

  render() {
    return (
      <div>
        <form onSubmit={this.atSubmit} style={{ display: "flex" }}>
          <input
            type="text"
            name="title"
            placeholder="Add To-do"
            style={{ flex: "10", padding: "5px" }}
            value={this.state.title}
            onChange={this.atChange}
          />
          <input
            type="submit"
            value="Submit"
            className="btn"
            style={{ flex: "1" }}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
