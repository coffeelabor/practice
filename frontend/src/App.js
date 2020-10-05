import React, { Component, useReducer } from 'react';
import Todos from './components/Todos'
import {rootReducer, initialState} from "./reducers/index"
import './App.css';

// class App extends Component {
const App = () => {
  const [state, dispatch] = useReducer(rootReducer, initialState)


  return (
    <div className="App">
      {/* <h1>Howdy world, my old friend</h1> */}
      <Todos todos={this.state.todos}/>
    </div>
  );

}

export default App;
