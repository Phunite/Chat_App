import React from 'react';
import './App.css';
import 'react-bootstrap';
import MessageList from "./components/messageList";
import NewRoom from "./components/newRoom";
import NewMessage from "./components/newMessage";
import RoomList from "./components/roomList";
import { newExpression } from '@babel/types';
function App() {
  return (
    <div className="App container">
      <div className="messageArea">
        <MessageList></MessageList>
      </div>
      <div className="roomArea">
        <RoomList></RoomList>
      </div>
      <div className="newMessageArea">
        <NewMessage></NewMessage>
      </div>
      <div className="createRoomArea">
        <NewRoom></NewRoom>
      </div>
    </div>
  );
}

export default App;
