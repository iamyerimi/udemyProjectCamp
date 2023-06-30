import React, { useState, useEffect } from "react";
import io from "socket.io-client";
const socket = io("http://localhost:3001");

const Chat = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    socket.on("message", messageHandler);
    return () => {
      socket.off("message", messageHandler);
    };
  });

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const messageHandler = (message) => {
    setMessage((prev) => [...prev, message]);
  };

  // sendingMsgHandler, 메세지 전송 핸들러
  const sendingMsgHandler = () => {
    if (inputValue.trim() !== "") {
      const currentTime = new Date().toLocaleDateString();
      socket.emit("message", {
        username,
        content: inputValue,
        time: currentTime,
      });
      setInputValue(""); // clear the inputValue after sending
    }
  };

  return (
    <div>
      <h1>Live Chatting</h1>

      <div>
        {message.map((message, index) => (
          <p key={index}>
            {message.username} : {message.content} - {message.time}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={username}
        onChange={usernameHandler}
        // onChange={(e) => setUsername(e.target.value)}
        placeholder="write down your username."
      />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={sendingMsgHandler}>send! </button>
    </div>
  );
};

export default Chat;
