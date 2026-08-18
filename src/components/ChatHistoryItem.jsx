function ChatHistoryItem({ chatTitle, setSelectedChat }) {
  return chatTitle.map((chat) => (
    <p key={chat.id} onClick={() => setSelectedChat(chat)}>
      {chat.title}
    </p>
  ));
}

export default ChatHistoryItem;
