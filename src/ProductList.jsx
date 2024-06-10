import React, { Component } from "react";
import Item from "./Item";
export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [
        { id: "1a", name: "Sam sung", phone: "0937572917" },
        { id: "2b", name: "Apple", phone: "0937572917" },
        { id: "3c", name: "Xiaomi", phone: "0937572917" }
      ]
    };
  }

  handleClickArrange = () => {
    this.setState(prevState => ({
      productList: prevState.productList.sort((a, b) => {
        if (a.name > b.name) return 1;
        else if (a.name < b.name) return -1;
        else return 0;
      })
    }));
  };
  handleAddProduct = () => {
    this.setState(prevState => ({
      productList: [
        { id: "4d", name: "máy tính bảng", phone: "0937572917" },
        ...prevState.productList
      ]
    }));
  };
  render() {
    console.log(this.state.productList);
    return (
      <div>
        <button onClick={this.handleClickArrange}>Sort ngay</button>
        <button onClick={this.handleAddProduct}>Add product</button>
        {this.state.productList.map((product, index) =>
          <Item product={product} key={index} />
        )}
      </div>
    );
  }
}
