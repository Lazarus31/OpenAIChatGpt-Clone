import { useEffect, useState } from "react";
import ChatArea from "./components/ChatArea.jsx";
import SideBar from "./components/SideBar.jsx";
import { ConversationTitle, chatHistory } from "./data/chatHistory.jsx";
function App() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [history, setHistory] = useState([]);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetch("http://localhost:1080/conversations")
      .then((res) => res.json())
      .then((data) => setHistory(data));
  }, []);
  // useEffect(() => {
  //   if (!selectedChat) return;
  //   fetch(`http://localhost:1080/conversations/${selectedChat.id}`)
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data));
  // }, [selectedChat]);

  const handleChats = (e) => {
    fetch(`http://localhost:1080/conversations/${e.id}`)
      .then((res) => res.json())
      .then((data) => setMessage(data));
  };

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
  const handleDelete = (id) => {
    if (!id) return;
    const deleting = history.filter((chat) => chat.id !== id);
    setHistory(deleting);
  };
  return (
    <div className="chatGPT-UI">
      <SideBar
        setSelectedChat={setSelectedChat}
        history={history}
        handleDelete={handleDelete}
        handleChats={handleChats}
      />
      <ChatArea
        message={message}
        selectedChat={selectedChat}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
export default App;
