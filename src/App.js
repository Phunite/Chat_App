import React from 'react';
import './App.css';
import 'react-bootstrap';
import ChatKit from '@pusher/chatkit-client';
import MessageList from "./components/messageList";
import NewRoom from "./components/newRoom";
import NewMessage from "./components/newMessage";
import RoomList from "./components/roomList";
import {tokenUrl, instanceLocator} from './config';

class App extends React.Component{
  componenentDidMount(){
    const chatManager=new ChatKit.chatManager({
      instanceLocator,
      userId:'phuly',
      tokenProvider:new ChatKit.tokenProvider({
        url:tokenUrl
      })
    })
    
    chatManager.connect()
    .then(currentUser => {
      currentUser.subscribeToRoom({
        roomId:19422726,
        hooks:{
          onNewMessage: message =>{
            console.log('message.text: ',message.text);
          }
        }
      })
    })
  }
  render(){
    return (
      <div className="App wrapper">
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
}

export default App;
