function ChatMessage({ chatUi, selectedChat }) {
  const activeChat =
    selectedChat &&
    chatUi.find((chat) => chat.conversation_id === selectedChat.id);
  if (activeChat) {
    const messages = Object.values(activeChat.mapping);
    return (
      <div>
        {messages.map((item) => (
          <div className="chats-output">
            {/* {item.message &&
              item.message.content &&
              item.message.content.parts &&
              item.message.content.parts[0]} */}
            {item?.message?.content?.parts?.[0]}
          </div>
        ))}
      </div>
    );
  }
  return <h1 className="chat-quest">Ready when you are.</h1>;
}
export default ChatMessage;
