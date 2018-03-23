import React, { Component } from 'react';
import './App.css';
import TodosModel from './models/Todos';
import TodoContainer from './containers/Todos'

class App extends Component {
  render() {
    const todosModel = new TodosModel();
    return (
      <TodoContainer todosModel={todosModel}></TodoContainer>
    );
  }
}

export default App;
