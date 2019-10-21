import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

class App extends Component {
  state = {
    todos: [
      //array - []
      {
        //objects - {}
        id: 1,
        title: "Wake up",
        completed: false
      },
      {
        id: 2,
        title: "Go gym",
        completed: false
      },
      {
        id: 3,
        title: "Go sleep",
        completed: false
      }
    ]
  };

  //the func below takes the id when the onChange=...bing() is triggered in the ToDoItem.js comp, then finds the item in the state using the id, and then changes/switches/toggles the completed boolean
  markComplete = id => {
    //this deletes the record, based on an index that we pass through, and return the new array
    this.setState({
      todos: this.state.todos.map(listin => {
        if (listin.id === id) {
          listin.completed = !listin.completed;
        }
        return listin;
      })
      //filter does not mutate but rather creates a new array, and is a preferred method for modifying arrays in JavaScript. This particular method is testing an index vs. all the indices in the array, and returning all but the one that is passed through.
    });
  };

  // [...] <- this copies everything that's already there. This func filters out any 'listin' that has the id which is not equal to the id that passed in as the parameter
  deleteData = id => {
    //this deletes the record, based on an index that we pass through, and return the new array
    this.setState({
      todos: [...this.state.todos.filter(listin => listin.id !== id)]
      //filter does not mutate but rather creates a new array, and is a preferred method for modifying arrays in JavaScript. This particular method is testing an index vs. all the indices in the array, and returning all but the one that is passed through.
    });
  };

  addData = title => {
    const newToDo = {
      id: 4, // this can be anything
      title: title, //the second title is the title that's passed in
      complete: false
    };

    this.setState({
      todos: [...this.state.todos, newToDo]
      // the above copies the current this.state.todos, and also add the newToDo (see above)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="title">To-do List</h1>
          <AddTodo addData1={this.addData} />
          <Todos
            todosParam={this.state.todos}
            markComplete1={this.markComplete}
            deleteData1={this.deleteData}
          />
        </div>
      </div>
    );
  }
}

export default App;
