import React from 'react'
import "./message.css";


const Message = ({ user, message, classs }) => {
    if (user) {
        return (
            <div className='messageBox left'>
                {`${user}: ${message}`}
            </div>
        )
    }
    else {
        return (
            <div className="messageBox left">
                {'You: ${message}'}
            </div>
        )
    }


}

export default Message;