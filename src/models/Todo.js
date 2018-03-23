let id = 0;

class TodoModel {
  constructor(content) {
    this._todo = {
      id: id++,
      content: content,
      isComplete: false
    };
  }

  get id() { return this._todo.id; }
  get content() { return this._todo.content; }
  get isComplete() { return this._todo.isComplete; }

  toggle () {
    this._todo.isComplete = !this._todo.isComplete
  }

}

export default TodoModel;