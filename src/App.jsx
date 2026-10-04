import { useEffect, useState } from "react";
import ChatArea from "./components/ChatArea.jsx";
import SideBar from "./components/SideBar.jsx";
import { ConversationTitle, chatHistory } from "./data/chatHistory.jsx";
function App() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [history, setHistory] = useState([]);
  const [message, setMessage] = useState([]);
  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:1080/conversations");
      const data = await res.json();

      setHistory(data);
    } catch (error) {
      console.error("Error fetching conversations:", error);
      setHistory([]);
    }
  };
  useEffect(() => {
    fetchData();
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
      .then((data) => {
        console.log("sao", data);
        setMessage(data);
      });
  };

  const handleDelete = (id) => {
    if (!id) return;
    const deleting = history.filter((chat) => chat.id !== id);
    setHistory(deleting);
  };
  const handlePin = (id) => {
    const pinChat = history.map((chat) => {
      if (chat.id === id) {
        return {
          ...chat,
          pinned: true,
        };
      }
      return chat;
    });
    pinChat.sort((a, b) => {
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;
      return 0;
    });
    console.log("pin", pinChat);
    setHistory(pinChat);
  };
  const handleNewChat = () => {
    setSelectedChat(null);
    setMessage([]);
  };
  return (
    <div className="chatGPT-UI">
      <SideBar
        setSelectedChat={setSelectedChat}
        setMessage={setMessage}
        history={history}
        handleDelete={handleDelete}
        handleChats={handleChats}
        handlePin={handlePin}
        handleNewChat={handleNewChat}
      />
      <ChatArea
        fetchData={fetchData}
        message={message}
        setMessage={setMessage}
        selectedChat={selectedChat}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
export default App;
