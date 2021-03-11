import React, { Component } from 'react';
import io from "socket.io-client";
import "./notification.css";
const socket = io()
class Notification extends Component {
  state = {
    title: "",
    timer: true
  }

  componentDidMount () {
    socket.on('new-book', (data) => {
      console.log(data)
      this.setState({ title: data.title + " has been saved!", timer: false })
    });
  }

  componentWillUpdate(nextProps, nextState) {
    if( this.state.timer != nextState.timer ) {
      if( this.textTimer ) clearTimeout(this.textTimer)
      this.textTimer = setTimeout(() => {
        this.setState({
          timer: true
        });
      }, 3000)
    }
  }
    
  render () {
    console.log(this.state.title)
    return (
      <div className={`notification-bar hidden-${this.state.timer}`}>
        <div>
          <h2>{this.state.title}</h2>
        </div>
      </div>
    )
  }
} 

export default Notification