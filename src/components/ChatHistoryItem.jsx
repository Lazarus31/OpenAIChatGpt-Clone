function ChatHistoryItem({ chatTitle, setSelectedChat }) {
  return chatTitle.map((chat) => (
    <h3 key={chat.id} onClick={() => setSelectedChat(chat)}>
      {chat.title}
    </h3>
  ));
}

export default ChatHistoryItem;
