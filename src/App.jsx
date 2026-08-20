import { useState } from "react";
import ChatArea from "./components/ChatArea.jsx";
import SideBar from "./components/SideBar.jsx";
import { ConversationTitle, chatHistory } from "./data/chatHistory.js";
function App() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [history, setHistory] = useState(ConversationTitle.items);
  const [message, setMessage] = useState(chatHistory);
  const handleSubmit = (userText) => {
    const chatId = crypto.randomUUID();
    const addTitle = [{ id: chatId, title: userText }, ...history];
    const addChat = [
      {
        title: userText,
        conversation_id: chatId,
        mapping: {
          chatId: {
            id: chatId,
            message: {
              id: chatId,
              content: {
                content_type: "text",
                parts: [userText],
              },
            },
          },
        },
      },
      ...message,
    ];
    setMessage(addChat);
    setHistory(addTitle);
  };

  return (
    <div className="chatGPT-UI">
      <SideBar setSelectedChat={setSelectedChat} history={history} />
      <ChatArea
        message={message}
        selectedChat={selectedChat}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
export default App;
