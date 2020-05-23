import React, { Component } from "react";
import Todo from "../todo/todo.component";
import SearchField from "../search-bar/search-bar.component";

import { v4 as uuidv4 } from "uuid";
import NewTodoForm from "../new-todo-form/new-todo-form.component";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ todo: "", created: "", id: "", important: false }],
      searchField: ""
    };
  }
  searchFilter = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  deleteTodo = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    });
  };
  updateTodo = (id, updatedTodo) => {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, todo: updatedTodo };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  addTodo = todo => {
    let createdAt = new Date().toString().slice(0, 25);
    let newTodo = {
      ...todo,
      id: uuidv4(),
      created: createdAt,
      important: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };
  render() {
    const filteredToDo = this.state.todos.filter(todo =>
      todo.todo.toLowerCase().includes(this.state.searchField.toLowerCase())
    );
    return (
      <div>
        <SearchField searchFilter={this.searchFilter} />
        <NewTodoForm addTodo={this.addTodo} />

        {filteredToDo.map(el => {
          return !el.todo
            ? null
            : <Todo
                updateState={this.updateTodo}
                id={el.id}
                deleteTodo={this.deleteTodo}
                key={el.id}
                created={el.created}
                todo={el.todo}
              />;
        })}
      </div>
    );
  }
}
export default TodoList;
