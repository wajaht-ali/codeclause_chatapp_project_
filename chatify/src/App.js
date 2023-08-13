import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import join from "./components/join/join";
import chat from "./components/chat/chat";
import './App.css';


// const ENDPOINT = 'http://localhost:4500/';
// const socket = socketIO(ENDPOINT, { transports: ['websocket'] });


function App() {
  return (

    <div className="App">
      {/* <h2>Welcome to headerd</h2> */}
      <Router>
        <Routes>
          <Route exact path="/" Component={join} />
          <Route path="/chat" Component={chat}/>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
