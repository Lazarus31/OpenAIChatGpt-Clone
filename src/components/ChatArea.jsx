import { useState } from "react";
import {
  ShareFatIcon,
  ArrowUpIcon,
  MicrophoneIcon,
} from "@phosphor-icons/react";
import ChatMessage from "./ChatMessage";
function ChatArea({ message, selectedChat, handleSubmit, fetchData }) {
  console.log("see", message);
  const [text, setText] = useState("");

  const handleSend = async () => {
    const response = await fetch("http://localhost:1080/conversation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: text,
      }),
    });
    response.json();
    console.log(response);
    await fetchData();
  };
  return (
    <div className="chatArea">
      <div className="chatArea-1">
        <button className="freeOffer">Free Offer</button>
        <button>
          <ShareFatIcon size={20} />
        </button>
      </div>
      <div className="middleSection">
        <div id="chat-1">
          <ChatMessage message={message} selectedChat={selectedChat} />
        </div>
        <div className="typingSection" id="typingSection">
          <button className="plusButton">+</button>
          <input
            value={text}
            onChange={(d) => setText(d.target.value)}
            className="typeInput"
            placeholder="Ask Anything"
          />
          <button className="voiceButton">
            <MicrophoneIcon size={32} />
          </button>
          <button
            className="addButton"
            onClick={() => {
              handleSend();
            }}
          >
            <ArrowUpIcon size={32} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatArea;
