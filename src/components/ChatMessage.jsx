function ChatMessage({ message, selectedChat }) {
  // const activeChat =
  //   selectedChat &&
  //   message?.find((chat) => chat.conversation_id === selectedChat.id);
  console.log("Data", message);

  if (selectedChat && message && message.mapping) {
    const messages = Object?.values(message?.mapping);
    return (
      <div>
        {messages?.map((item) => (
          <div key={item?.id} className="chats-output">
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
