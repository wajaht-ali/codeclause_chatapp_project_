import React from "react";
import { useEffect } from "react";
import { MdKeyboardAlt, MdSend } from "react-icons/md";
import socketIo from "socket.io-client";
// import { user } from "../join/join";
import "./chat.css";

const ENDPOINT = "http://localhost:4500/";

const Chat = () => {

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


  const socket = socketIo(ENDPOINT, { transports: ['websocket'] });
  useEffect(() => {
    socket.on('connect', () => {
      // alert("connected");
    })

    return () => {

    }

  }, [socket]);
  return (
    <div className="chatPage">
      <div className="chatContainer">
        <div className="header"></div>
        <div className="chatBox"></div>

        <div className="inputBox">
          {/* <MdKeyboardAlt id="keyboardIcon"/> */}
          <input  otype="text" id="inputText" placeholder=" Your message..."/>
          <button id="sendBtn"><MdSend id="sendIcon"/></button>
        </div>
      </div>
    </div>
  )
}

export default Chat