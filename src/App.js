import React from 'react';
import './App.css';
import 'react-bootstrap';
import MessageList from "./components/messageList";
import NewRoom from "./components/newRoom";
import NewMessage from "./components/newMessage";
import RoomList from "./components/roomList";
function App() {
  return (
    <div className="App container">
      <div clas="row">
        <div class="col-md-12"><MessageList></MessageList></div>
      </div>
       <NewRoom></NewRoom>
       
    </div>
  );
}

export default App;
