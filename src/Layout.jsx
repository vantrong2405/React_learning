import React, { Component } from 'react'

export default class Layout extends Component {
    render() {
        console.log(this);
    return (
      <div className='layout'>{this.props.children}</div>
    )
  }
}
