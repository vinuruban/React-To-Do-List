import React, { Component } from 'react';
import './App.css';
import Todos from "./components/Todos";

class App extends Component {

  state = {
    todos: [ //array - []
      { //objects - {}
        id: 1,
        title: 'Wake up',
        completed: false
      },
      {
        id: 2,
        title: 'Go gym',
        completed: true
      },
      {
        id: 3,
        title: 'Go sleep',
        completed: false
      }
    ]
  }

  markComplete = (e) => {
    //this deletes the record, based on an index that we pass through, and return the new array
    this.setState({
      todos: [ //array - []
      { //objects - {}
        id: 1,
        title: 'Wake up',
        completed: false
      },
      {
        id: 2,
        title: 'Dont go gym',
        completed: false
      },
      {
        id: 3,
        title: 'Eat sweets',
        completed: false
      }
    ]
        //filter does not mutate but rather creates a new array, and is a preferred method for modifying arrays in JavaScript. This particular method is testing an index vs. all the indices in the array, and returning all but the one that is passed through.
    })
}

  render() {
    return (
      <div className="App">
        <h1>App.js</h1>
        <Todos todosParam={this.state.todos} cTodos={this.changeTodos} markComplete1={this.markComplete}/>
      </div>
    );
  }
}

export default App;