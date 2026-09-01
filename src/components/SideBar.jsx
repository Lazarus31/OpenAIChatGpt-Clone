import { useState } from "react";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import ChatHistoryItem from "./ChatHistoryItem";

function SideBar({ setSelectedChat, history, handleDelete, handleChats }) {
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  const filteredChats = history.filter((chat) =>
    chat.title.toLowerCase().includes(searchText.toLowerCase()),
  );
  console.log("histo", history);
  return (
    <div className="sideBar">
      <div id="iconSection" className="iconSection">
        <p className="chatgpt-icon">ChatGPT</p>

        <button
          className="searchSection"
          id="searchSecstion"
          onClick={() => setShowSearch(!showSearch)}
        >
          <MagnifyingGlassIcon size={15} />
        </button>
      </div>

      <div id="searchContainer">
        {showSearch && (
          <input
            placeholder="search..."
            value={searchText}
            onChange={(find) => setSearchText(find.target.value)}
          />
        )}
      </div>

      <div className="gptPanel">
        <div className="gptButtons" id="sicky-1">
          <p>New Chat</p>
        </div>

        <div className="gptButtons">
          <p>Image</p>
        </div>

        <div className="gptButtons">
          <p>Library</p>
        </div>

        <div className="gptButtons">
          <p>Projects</p>
        </div>

        <div className="gptButtons">
          <p>More</p>
        </div>

        <div className="gptButtons">
          <p>Plugin</p>
        </div>
      </div>

      <div id="recents" className="chatsName">
        <h3>Recents</h3>

        <ChatHistoryItem
          chatTitle={filteredChats}
          setSelectedChat={setSelectedChat}
          handleDelete={handleDelete}
          handleChats={handleChats}
        />
      </div>

      <div className="self">
        <p>Alazar Eshete</p>
        <button>Claim offer</button>
      </div>
    </div>
  );
}

export default SideBar;
