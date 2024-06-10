import { logRoles } from "@testing-library/react";
import React, { Component, createRef } from "react";

export default class ProductList extends Component {
  constructor(props) {
    super(props);

    // this.inputFile = createRef();
    this.state = {
      selectedFile: null
    };
    this.handleUploadFile = this.handleUploadFile.bind(this);
  }

  handleUploadFile(e) {
    console.log(e.target.files[0]);
    this.setState({
      selectedFile: e.target.files[0]
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.selectedFile) {
      const formData = new FormData();
      formData.append(
        "myFile",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
      console.log(formData);
    }

    console.log(this.state.selectedFile);
  };
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <input
            type="file"
            name=""
            // ref={this.inputFile}
            onChange={this.handleUploadFile}
          />
          <input type="submit" defaultValue={"Submit"} />
        </form>
      </div>
    );
  }
}
