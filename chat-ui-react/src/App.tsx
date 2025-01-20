import { useEffect } from 'react'
import { io } from 'socket.io-client'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import ChatPage from './Pages/Chat-page';
import HomePage from './Pages/Home-page';

const socket = io('http://127.0.0.1:5000')

function App() {

  useEffect(() => {
    console.log("Connecting to server...");
    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    socket.on("connect_error", (err) => {
      console.error("Connection error:", err);
      alert("Failed to connect to the server. Please try again later.")
      });
    
    socket.off("connect_error");
    
  }, []);

  return (
    <Routes>
      <Route path='/' element={<HomePage socket={socket} />} />
      <Route path='/chat' element={<ChatPage socket={socket} />} />
    </Routes>
  );
}

export default App