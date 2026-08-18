function ChatHistoryItem({ chatTitle, setSelectedChat }) {
  return chatTitle.map((chat) => (
    <p className="Recents-input" key={chat.id} onClick={() => setSelectedChat(chat)}>
      {chat.title}
    </p>
  ));
}

export default ChatHistoryItem;
