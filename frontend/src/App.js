import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todos from './components/Todos'
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id:1,
        title: 'do some stuff',
        completed: false
      },
      {
        id:2,
        title: 'mow yard',
        completed: false
      },
      {
        id:3,
        title: 'gutters',
        completed: false
      }
    ]
  }
  render(){

    return (
      <div className="App">
        {/* <h1>Howdy world, my old friend</h1> */}
        <Todos todos={this.state.todos}/>
    </div>
  );
}
}

export default App;
