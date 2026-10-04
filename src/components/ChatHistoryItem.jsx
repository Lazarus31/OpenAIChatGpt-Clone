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
  handlePin,
}) {
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

          <DropdownMenu>
            <DropdownMenuTrigger onClick={(e) => e.stopPropagation()}>
              <DotsThreeOutlineIcon size={20} weight="bold" />
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => handlePin(chat.id)}>
                Pin
              </DropdownMenuItem>
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
