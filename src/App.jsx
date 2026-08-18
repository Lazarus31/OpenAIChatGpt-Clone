import { useState } from "react";
import ChatArea from "./components/ChatArea.jsx";
import SideBar from "./components/SideBar.jsx";
import { ConversationTitle, chatHistory } from "./data/chatHistory.js";
function App() {
  const [selectedChat, setSelectedChat] = useState(null);
  return (
    <div className="chatGPT-UI">
      <SideBar
        chatTitle={ConversationTitle.items}
        setSelectedChat={setSelectedChat}
      />
      <ChatArea chatUi={chatHistory} selectedChat={selectedChat} />
    </div>
  );
}
export default App;
