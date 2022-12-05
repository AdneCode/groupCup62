import { useEffect } from "react";
import "./App.css";
import { io } from "socket.io-client";

function App() {
  //connect to server
  const connect = () => {
    const socket = io("http://localhost:4000");
    socket.on("connect", () => {
      socket.emit("joinTournament", "", 1);
    });
  };

  //connect to the server once
  useEffect(() => {
    connect();
  }, []);

  return <div className="App">Ping Pong Game</div>;
}

export default App;
