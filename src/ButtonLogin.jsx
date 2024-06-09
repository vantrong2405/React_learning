import React, { Component } from "react";

export default class ButtonLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    };
  }

  handleClick = () => {
    this.setState(prev => ({
      ...prev,
      isLogin: !prev.isLogin
    }));
  };

  render() {
    return (
      <div style={{ margin: "auto", width: "200px" }}>
        <BtnLoggin
          isLogin={this.state.isLogin}
          handleClick={this.handleClick}
        />
        <BtnLogout
          isLogin={this.state.isLogin}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export function BtnLoggin({ isLogin, handleClick }) {
  return (
    <div>
      {isLogin === false && <button onClick={handleClick}>Loggin</button>}
    </div>
  );
}
export function BtnLogout({ isLogin, handleClick }) {
  return (
    <div>
      {isLogin && <button onClick={handleClick}>Logout</button>}
    </div>
  );
}
