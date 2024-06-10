import React, { Component } from "react";

export default class RowTable extends Component {
  render() {
    const { name, price } = this.props.product;
    return (
      <tr>
        <td>
          {name}
        </td>
        <td>
          ${price}
        </td>
      </tr>
    );
  }
}
