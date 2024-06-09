/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'

export default class Clock extends Component {

    constructor(props) {
        super(props)
        this.state = {
            time: {
                created: new Date().toLocaleTimeString()
            },
            name: this.props.name
        }
    }

    getTime = () => {
        return this.setState({
            time: {
                created: new Date().toLocaleTimeString()
            }
        })
    }

    componentDidMount() {
        console.log('Tôi được render lần đầu tiên');
    }

    componentDidUpdate() { // khi update như setState props sẽ chạy
        console.log('Update tôi')
    }
    componentWillUnmount() { // Khi một đối tượng bỉ ẩn sẽ chạy
        console.log('Tôi đã được hủy');
    }
    render(props) {
        console.log(this.props);
        return (
            <div>
                <div>name : {this.state.name}</div>
                <div>clock1 {this.state.time.created}</div>
                <button onClick={this.getTime}>Click me</button>
            </div>
        )
    }
}


