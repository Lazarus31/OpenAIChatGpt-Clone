// import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { DotsThreeOutlineIcon } from "@phosphor-icons/react";
function ChatHistoryItem({
  setSelectedChat,
  chatTitle,
  handleDelete,
  handleChats,
}) {
  // const [showdot, setShowdot] = useState(false);

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
          {/* <button
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
          )} */}
          <DropdownMenu>
            <DropdownMenuTrigger onClick={(e) => e.stopPropagation()}>
              <DotsThreeOutlineIcon size={20} weight="bold" />
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => handleDelete(chat.id)}>
                Delete
              </DropdownMenuItem>

              <DropdownMenuItem>Rename</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ))}
    </div>
  );
}

export default ChatHistoryItem;
