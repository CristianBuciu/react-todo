import React, { Component } from "react";
import TodoList from "./components/todo-list/todo-list.component";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app">
        <h1 className="app-title">My To-Do List</h1>

        <TodoList />
      </div>
    );
  }
}

export default App;
