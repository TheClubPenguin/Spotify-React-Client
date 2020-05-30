import React, {Component} from 'react'

class Chat extends Component{
  constructor (props) {
    super(props)
    this.state = {}
  }

  chatSocket = new WebSocket('ws:localhost:8000/chat')
  render () {
    return (
      <h1>Test</h1>
    );

  }
}

export default Chat;