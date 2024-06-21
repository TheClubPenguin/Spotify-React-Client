import React, {Component} from 'react'
import socketIOClient from "socket.io-client"
const ENDPOINT = "http://127.0.0.1:8000/chat";


class Chat extends Component {
  constructor (props) {
    super(props);
    this.state = {
      message: "Test",
      socket: null,
    };

    this.inputChange = this.inputChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.sendMessageOnReturn = this.sendMessageOnReturn.bind(this);
  };

  socket = socketIOClient(ENDPOINT)

  componentDidMount () {
    this.socket.on("connect", () => {
      console.log("connected to socket");
      this.setState({
        display: '',
      })
    })

    this.socket.on("message", (message) => {
      console.log(message)
      this.setState({
        display: message.message,
      })
    })
  };


  inputChange (event) {
    /**
     * Update the class state when the user types in the input field
     */
    const value = event.target.value;
    
    this.setState({
      message: value,
    });
  }


  sendMessage (event) {
    event.preventDefault();
    let message = this.state.message;

    this.socket.emit('send-message', {message: message})
    this.setState({
      message: ""
    })
  }

  sendMessageOnReturn (event) {
    console.log(event)
    if (event.keyCode === 13 || event.which === 13) {
      this.sendMessage(event);
    }
  }

  render () {
    return (
    <div>
      <h1>{this.state.message}</h1>
    <p id="chat-log">{this.state.display}</p>
      <input type="text" id="message" value={this.state.message} onChange={this.inputChange} onKeyPress={this.sendMessageOnReturn}/>
      <button onClick={this.sendMessage}>Send</button>
    </div>
    );
  };
};

export default Chat;