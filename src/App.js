import React, { Component } from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom'
import "./App.css";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
// import uuid from 'uuid';
import axios from 'axios';

class App extends Component {
  state = {
    todos: []
  };

  //install 'npm i axios' for api calls
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(result => 
      this.setState({
        todos: result.data
      }))
  }

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
    // //this deletes the record, based on an index that we pass through, and return the new array
    // this.setState({
    //   todos: [...this.state.todos.filter(listin => listin.id !== id)]
    //   //filter does not mutate but rather creates a new array, and is a preferred method for modifying arrays in JavaScript. This particular method is testing an index vs. all the indices in the array, and returning all but the one that is passed through.
    // });

    axios.delete('https://jsonplaceholder.typicode.com/todos/' + id)
    .then(result => this.setState({
      todos: [...this.state.todos.filter(listin => listin.id !== id)]
      //filter does not mutate but rather creates a new array, and is a preferred method for modifying arrays in JavaScript. This particular method is testing an index vs. all the indices in the array, and returning all but the one that is passed through.
    }))
  };

  addData = title => {

    // const newToDo = {
    //   id: uuid.v4(), // this randomly generates a number - install 'npm i uuid'
    //   title: title, //the second title is the title that's passed in
    //   complete: false
    // };
    //
    // this.setState({
    //   todos: [...this.state.todos, newToDo]
    //   // the above copies the current this.state.todos, and also adds the newToDo (see above)
    // });

    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed: false
    })
      .then(result => this.setState({
      todos: [...this.state.todos, result.data]
      // the above copies the current this.state.todos, and also adds the result.data (see above)
    }))
    //the above posts data in the server first, and then updates the UI (our front end)    
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />

            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addData1={this.addData} />
                <Todos
                  todosParam={this.state.todos}
                  markComplete1={this.markComplete}
                  deleteData1={this.deleteData}
                />
              </React.Fragment>  
            )} />

            <Route path="/about" component={About} />

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
