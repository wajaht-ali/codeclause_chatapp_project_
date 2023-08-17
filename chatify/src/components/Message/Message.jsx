import React from 'react'
import "./message.css";
const Message = ({message}) => {
  return (
    <div className='messageBox'>
         {message}
    </div>
  )
}

export default Message;