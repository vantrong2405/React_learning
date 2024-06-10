import React, { Component } from "react";

export default class Item extends Component {
  render() {
    const { product } = this.props;
    return (
      <div>
        <input type="text" />
        {product.name} - {product.phone}
      </div>
    );
  }
}
