import React, { Component } from "react";
import "./search-bar.scss";
import { ReactComponent as Search } from "../../assets/search.svg";

class SearchField extends Component {
  handleChange = e => this.props.searchFilter(e);
  render() {
    return (
      <div>
        <form className="search-form" autoComplete="off">
          <label htmlFor="search">
            <Search className="search-svg" />
          </label>
          <input
            className="search-input"
            type="text"
            id="search"
            name="searchField"
            onChange={this.handleChange}
            placeholder="search to-do"
          />
        </form>
      </div>
    );
  }
}

export default SearchField;
