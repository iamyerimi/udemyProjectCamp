import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import styles from "../styles/Chat.module.css";
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

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendingMsgHandler();
    }
  };

  return (
    <div className={styles.chatContainer}>
      <h1>Live Chatting</h1>

      <div className={styles.messageContainer}>
        {message.map((message, index) => (
          <p key={index} className={styles.message}>
            <span className={styles.username}>{message.username}</span> :{" "}
            {message.content} - {message.time}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={username}
        onChange={usernameHandler}
        placeholder="write down your username."
        className={styles.input}
      />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress} // Enter 키 이벤트 처리
        className={styles.input}
      />
      <button className={styles.button} onClick={sendingMsgHandler}>
        send!{" "}
      </button>
    </div>
  );
};

export default Chat;
