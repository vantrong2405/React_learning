import React, { Component } from "react";
import "./Style.css";
import Search from "./Search";
import RowCategory from "./RowCategory";
import RowTable from "./RowTable";
export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [
        {
          id: "1a",
          category: "Phone",
          name: "Xiaomi",
          price: "1999",
          stocked: true
        },
        {
          id: "2b",
          category: "Phone",
          name: "Samsung Galaxy",
          price: "2999",
          stocked: true
        },
        {
          id: "3c",
          category: "Phone",
          name: "iPhone",
          price: "3999",
          stocked: false
        },
        {
          id: "4d",
          category: "Laptop",
          name: "Dell XPS",
          price: "4999",
          stocked: true
        },
        {
          id: "5e",
          category: "Laptop",
          name: "MacBook Pro",
          price: "5999",
          stocked: false
        },
        {
          id: "6f",
          category: "Tablet",
          name: "iPad",
          price: "2499",
          stocked: true
        },
        {
          id: "7g",
          category: "Tablet",
          name: "Samsung Galaxy Tab",
          price: "2299",
          stocked: true
        },
        {
          id: "8h",
          category: "Smartwatch",
          name: "Apple Watch",
          price: "1299",
          stocked: false
        },
        {
          id: "9i",
          category: "Smartwatch",
          name: "Samsung Galaxy Watch",
          price: "999",
          stocked: true
        },
        {
          id: "10j",
          category: "Headphones",
          name: "Sony WH-1000XM4",
          price: "399",
          stocked: true
        }
      ],
      textSearch: "",
      inStock: false
    };
  }
  handleChangeTextSearch = (event, type) => {
    if (type === "search") {
      this.setState({
        textSearch: event.target.value
      });
    } else {
      this.setState({
        inStock: event.target.checked
      });
    }
  };
  render() {
    const rows = [];
    let category = null;
    this.state.productList.forEach(product => {
      if (this.state.inStock && product.stocked === false) {
        return;
      }
      if (
        product.name
          .toLocaleLowerCase()
          .indexOf(this.state.textSearch.toLocaleLowerCase()) === -1
      ) {
        return;
      }
      if (product.category !== category) {
        rows.push(
          <RowCategory key={product.category} category={product.category} />
        );
        category = product.category;
      }
      rows.push(<RowTable key={product.name} product={product} />);
    });
    return (
      <div>
        <form action="">
          <Search
            textSearch={this.state.textSearch}
            inStock={this.state.inStock}
            handleChangeTextSearch={this.handleChangeTextSearch}
          />
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}
