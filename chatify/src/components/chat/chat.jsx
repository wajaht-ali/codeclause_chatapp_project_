import React, { useState } from "react";
import { useEffect } from "react";
import { MdSend } from "react-icons/md";
import socketIo from "socket.io-client";
import { user } from "../join/join";
import "./chat.css";
import Message from "../Message/Message";
import ReactScrollToBottom from "react-scroll-to-bottom";

let socket;
const ENDPOINT = "http://localhost:4500/";

const Chat = () => {
  const [id, setid] = useState("");
  const [messages, setMessages] = useState([])
  const send = () => {
    const message = document.getElementById('inputText').value;
    socket.emit("message", {message, id});
    document.getElementById('inputText').value = "";
  }

  // const svgIcon = () => {
  //   let input = document.getElementById("inputText");
  //   let icon = document.getElementById("keyboardIcon")

  //     input = input.target.value;
  //     if(input === "") {
  //       return icon.style.visibility === "visibile";
  //     }
  //     else 
  //     return icon.style.visibility === "hidden";

  //   }


  useEffect(() => {
    socket = socketIo(ENDPOINT, { transports: ['websocket'] });
    socket.on('connect', () => {
      alert("connected");
      setid(socket.id);
    })

    socket.emit('joined', { user });

    socket.on("Welcome", (data) => {
      setMessages([...messages, data]);
      console.log(data.message);
    })

    socket.on("userJoined", (data) => {
      setMessages([...messages, data]);
      console.log(data.message);
    })

    socket.on('leave', (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    })


    return () => {
      socket.emit('offline');
      socket.off();
    }

  });

  useEffect(() => {
    socket.on('sendMessage', (data)=> {
      setMessages([...messages, data]);
      console.log(data.user, data.message, data.id);
    })
  
    return () => {
      
    }
  })
  
  return (
    <div className="chatPage">
      <div className="chatContainer">
        <div className="header"></div>
        <ReactScrollToBottom className="chatBox">
          {
            messages.map((item, index) => <Message message = {item.message} classs={'right'}/>)
          }
        </ReactScrollToBottom>

        <div className="inputBox">
          {/* <MdKeyboardAlt id="keyboardIcon"/> */}
          <input otype="text" id="inputText" placeholder=" Your message..." />
          <button onClick={send} id="sendBtn"><MdSend id="sendIcon" /></button>
        </div>
      </div>
    </div>
  )
}

export default Chat