import React, { useState, useEffect } from "react";
import Messages from "./Messages";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("https://scavus-chat-server.herokuapp.com/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  const handleNewMessage = () => {
    fetch("https://scavus-chat-server.herokuapp.com/messages", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        from: document.getElementById("input-from").value,
        text: document.getElementById("input-text").value,
      }),
    })
      .then((res) => res.json())
      .then((data) => setMessages(data));
  };

  return (
    <div className='all-messages-container'>
      <div className="chat">
        <form>
          <div>
            <input
              className="input-from"
              id="input-from"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <textarea
              className="input-text"
              id="input-text"
              type="text"
              placeholder="Enter your message"
              wrap="soft"
            />{" "}
          </div>
          <button
            className="send-button"
            type="submit"
            onClick={() => handleNewMessage()}
          >
            Send
          </button>
        </form>
      </div>
      <Messages messages={messages} />
    </div>
  );
};

export default Chat;
