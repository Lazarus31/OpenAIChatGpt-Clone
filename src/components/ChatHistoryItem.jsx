import { useState } from "react";
function ChatHistoryItem({
  setSelectedChat,
  chatTitle,
  handleDelete,
  handleChats,
}) {
  const [showdot, setShowdot] = useState(false);

  return (
    <div>
      {chatTitle.map((chat) => (
        <div
          className="Recents-input"
          key={chat.id}
          onClick={() => {
            handleChats(chat);
            setSelectedChat(chat);
          }}
        >
          {chat.title}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowdot(!showdot);
            }}
          >
            :
          </button>
          {showdot && (
            <div>
              <button onClick={() => handleDelete(chat.id)}>delete</button>
              <button>Rename</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ChatHistoryItem;
