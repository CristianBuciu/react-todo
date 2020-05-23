import React, { Component } from "react";
import "./todo.scss";
import { ReactComponent as Edit } from "../../assets/edit.svg";
import { ReactComponent as Delete } from "../../assets/delete.svg";
import { ReactComponent as Important } from "../../assets/important.svg";
import ReactTooltip from "react-tooltip";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: this.props.todo,
      isEditing: false,
      compleated: false,
      isImportant: false
    };
  }
  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  handleIsImportant = () => {
    this.setState({ isImportant: !this.state.isImportant });
  };
  handleCompleated = () => {
    this.setState({ compleated: !this.state.compleated });
  };
  handleDelete = () => {
    this.props.deleteTodo(this.props.id);
  };
  handleEdit = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };
  handleUpdate = e => {
    e.preventDefault();
    this.props.updateState(this.props.id, this.state.todo);
    this.handleEdit();
  };

  render() {
    let importantClassContainer = this.state.isImportant
      ? "todo__container todo__container--red"
      : "todo__container ";
    let importantClass = this.state.isImportant
      ? "todo__important todo__important--red"
      : "todo__important ";
    let completeClass = this.state.compleated
      ? "font__text line-through"
      : "font__text";
    let completeClassContainer = this.state.compleated
      ? " todo__container--green"
      : "";
    return (
      <div
        id={this.props.id}
        className={`${importantClassContainer} ${completeClassContainer}`}
      >
        <div className="todo__date-container">
          <p className="todo__date">
            {this.props.created}
          </p>

          <Important
            data-text-color="gold"
            data-tip="Important!"
            onClick={this.handleIsImportant}
            className={importantClass}
          />
          <ReactTooltip />
        </div>
        <div className="todo">
          {this.state.isEditing
            ? <form onSubmit={this.handleUpdate}>
                <input
                  onChange={this.handleChange}
                  name="todo"
                  className="edit-input"
                  type="text"
                  value={this.state.todo}
                />
                <button className="edit-button">Save</button>
              </form>
            : <p
                data-text-color="springgreen"
                data-tip="Mark Complete"
                onClick={this.handleCompleated}
                className={completeClass}
              >
                {this.props.todo}
              </p>}
          <div>
            <button onClick={this.handleEdit} className="todo__edit">
              <Edit className="todo__edit--svg" />Edit
            </button>
            <button onClick={this.handleDelete} className="todo__delete">
              <Delete className="todo__delete--svg" />
              DELETE
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
