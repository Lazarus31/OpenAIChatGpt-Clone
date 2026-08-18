import { useState } from "react";
import {
  ShareFatIcon,
  ArrowUpIcon,
  MicrophoneIcon,
} from "@phosphor-icons/react";
import ChatMessage from "./ChatMessage";
function ChatArea({ chatUi, selectedChat }) {
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
          <ChatMessage chatUi={chatUi} selectedChat={selectedChat} />
        </div>
        <div className="typingSection" id="typingSection">
          <button className="plusButton">+</button>
          <input className="typeInput" placeholder="Ask Anything" />
          <button className="voiceButton">
            <MicrophoneIcon size={32} />
          </button>
          <button className="addButton">
            <ArrowUpIcon size={32} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatArea;
