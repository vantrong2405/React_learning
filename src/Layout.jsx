/* eslint-disable react-hooks/rules-of-hooks */
import React, { Component, useContext } from "react";

// eslint-disable-next-line no-undef

export default class Layout extends Component {
  render() {
    return (
      <div className="layout">
        {this.props.children}
      </div>
    );
  }
}
