import React, { Component } from 'react';
import './App.css';
import Todos from "./components/Todos"

class App extends Component {

  state = {
    todos: [ //array - []
      { //objects - {}
        id: 1,
        title: 'Wake up',
        completed: false
      },
      {
        id: 1,
        title: 'Go gym',
        completed: false
      },
      {
        id: 3,
        title: 'Go sleep',
        completed: false
      }
    ]
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>App.js</h1>
        <Todos tod={this.state.todos}/>
      </div>
    );
  }
}

export default App;