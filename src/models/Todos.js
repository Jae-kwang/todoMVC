import TodoModel from './Todo'

class TodosModel {
  constructor() {
    this._todos = [];
  }

  get todos() { return this._todos; }
   
  createTodo = (todo) => {
    try {
      if (!(todo instanceof TodoModel)) throw "Todos에는 Todo Model로 추가가 가능합니다."
      this._todos.push(todo)
    } catch (e) {
      console.error(e);
    }
  }

  deleteTodo = (id) => {
    this._todos = this._todos.filter((todo) => {
      return !(todo.id === id);
    })
  }

  checkTodo = (id) => {
    this._todos.forEach((todo) => {
      if (todo.id === id) todo.toggle();
    })
  }
  
  filterTodo = (filter) => {
    return this._todos.filter((todo) => {
      return todo.isComplete === (filter === 'completed')
    })
  }
}

export default TodosModel;