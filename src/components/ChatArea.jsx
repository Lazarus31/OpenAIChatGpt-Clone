import { useState } from "react";
import {
  ShareFatIcon,
  ArrowUpIcon,
  MicrophoneIcon,
} from "@phosphor-icons/react";
import ChatMessage from "./ChatMessage";
function ChatArea({
  message,
  selectedChat,

  fetchData,

  handleChats,
  setSelectedChat,
}) {
  console.log("see", message);
  const [text, setText] = useState("");

  const handleSend = async () => {
    const chatd = await fetch("http://localhost:1080/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama3.2:3b",
        conversation_id: selectedChat?.id,
        messages: [
          ...message.map((chat) => ({
            role: chat.role,
            content: chat.text,
          })),
          {
            role: "user",
            content: text,
          },
        ],
      }),
    }).then((res) =>
      res.json().then(async (data) => {
        console.log("khklhklhl", data);
        return data;
      }),
    );
    await fetchData();
    setSelectedChat({
      id: chatd.id,
      title: text,
      // text: chatd.message.content,
    });
    await handleChats(chatd);

    console.log("nowqw", chatd);
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
              setText("");
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
