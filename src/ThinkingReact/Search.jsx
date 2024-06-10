/* eslint-disable no-labels */
import React, { Component } from "react";

export default class Search extends Component {
  render() {
    const { textSearch, instock, handleChangeTextSearch } = this.props;
    return (
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          defaultValue={textSearch}
          onChange={e => handleChangeTextSearch(e, "search")}
        />
        <div>
          <input
            type="checkbox"
            name=""
            id=""
            value={instock}
            onChange={e => handleChangeTextSearch(e, "instock")}
          />
          Instock
        </div>
      </div>
    );
  }
}
