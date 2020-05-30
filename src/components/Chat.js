import React, {Component} from 'react'
const io = require('socket.io-client')
const ENDPOINT = "http://127.0.0.1:8000";

class Chat extends Component{
  constructor (props) {
    super(props);
    this.state = {};
  };

  socket = io(ENDPOINT);


  render () {
    return (
      <h1>Test</h1>
    );

  };
};

export default Chat;