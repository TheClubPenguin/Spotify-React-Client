import React, {Component} from 'react'
import socketIOClient from "socket.io-client"
const ENDPOINT = "http://127.0.0.1:8000/";


class Chat extends Component{
  constructor (props) {
    super(props);
    this.state = {
      message: "Test",
    };
  };

  componentDidMount () {
    const socket = socketIOClient(ENDPOINT)
    socket.on('connect', () => {
      console.log('connected to socket')
    })

    socket.on('hello', (message) => {
      this.setState({
        message: message,
      })
    })
  }



  render () {
    return (
    <div>
      <h1>{this.state.message}</h1>
      <p id='chat-log'></p>
      <button id='submit'>Send</button>
    </div>
    );
  };
};

export default Chat;