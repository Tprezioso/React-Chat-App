import React, { Component } from 'react';
import './App.css';
import MessageList from './compomrmts/MessageList'
import SendMessageForm from "./compomrmts/SendMessageForm";
import RoomList from "./compomrmts/RoomList";
import NewRoomForm from "./compomrmts/NewRoomForm";



class App extends Component {
  render() {
    return (
      <div className="App">
        <RoomList />
        <MessageList />
        <SendMessageForm />
        <NewRoomForm />
      </div>
    );
  }
}

export default App;
