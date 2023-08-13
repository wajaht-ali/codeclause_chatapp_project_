import React, { useState } from 'react'
import './join.css';
import logo from '../../imgs/no-bg-logo.png';
import { Link } from "react-router-dom";

let user;
const Join = () => {

    const [name, setName] = useState("");

    const sendUser = () => {
        user = document.getElementById('joinInput').value;
        document.getElementById("joinInput").value = "";
    }

    return (
        <div className='joinPage'>
            <div className="joinContainer">
                <img src={logo} alt="logo" />
                <p>Please enter your Identity here</p>
                <input onChange={(e)=> setName(e.target.value)} type="text" id="joinInput" placeholder='Enter your name' require />
                <Link onClick={(event)=>!name ? event.preventDefault():null} to={'/chat'}> <button onClick={sendUser} id='joinBtn'>Login</button> </Link>
            </div>
        </div>
    )
}

export default Join;
export { user };