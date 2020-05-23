import React, { Component } from "react";
import "./new-todo-form.scss";
import { ReactComponent as List } from "../../assets/lista.svg";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: "" };
  }
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.addTodo(this.state);
    this.setState({ todo: "" });
  };
  handleChange = evt => this.setState({ [evt.target.name]: evt.target.value });
  render() {
    return (
      <div className="form">
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <label className="form__label" htmlFor="enter-todo" />
          <input
            placeholder="Enter To-Do"
            className="form__input"
            type="text"
            id="enter-todo"
            name="todo"
            value={this.state.todo}
            onChange={this.handleChange}
          />

          <div className="button-container">
            <button className="form__button">
              <List className="list-svg" />Add To-Do
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
