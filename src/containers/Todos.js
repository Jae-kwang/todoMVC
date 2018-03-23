import React, { Component } from 'react';
import TodoModel from '../models/Todo';
import TodoComponent from '../components/Todo';

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.todosModel.todos,
    }
    this.createTodo = this.createTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.filterTodo = this.filterTodo.bind(this);
    this.reRender = this.reRender.bind(this);
  }

  createTodo(e) {
    if (e.target.value && e.key === 'Enter') {
      const todo = new TodoModel(e.target.value);
      this.props.todosModel.createTodo(todo);
      this.reRender();
      e.target.value = '';
    }
  }

  deleteTodo(id) {
    this.props.todosModel.deleteTodo(id);
    this.reRender();
  }

  toggleTodo(id) {
    this.props.todosModel.checkTodo(id);
    this.reRender(); 
  }

  filterTodo(filter) {
    const { todosModel } = this.props  
    this.setState({ todos: todosModel.filterTodo(filter) });
  }

  reRender() {
    const { todosModel } = this.props 
    this.setState({ todos: todosModel.todos });
  }

  render() {
    const { createTodo, deleteTodo, filterTodo, toggleTodo, reRender } = this;
    const { todos } = this.state

    return (
      <div>

        <header>
          <h1>todos</h1>
          <input type="text" onKeyPress={createTodo}/>
        </header>

        <section>
          <ul>
              {
                todos.map((todo, idx) => {
                  return <li key={idx}><TodoComponent todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/></li>
                })
              }
          </ul>
        </section>

        <footer>
          <span>
            <strong>{ todos.length }</strong> items left
          </span>
          <ul>
            <li><button onClick={reRender}>All</button></li>
            <li><button onClick={() => filterTodo('active')}>Active</button></li>
            <li><button onClick={() => filterTodo('completed')}>Completed</button></li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default TodoContainer;