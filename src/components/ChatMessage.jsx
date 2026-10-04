function ChatMessage({ message, selectedChat }) {
  console.log("Data", message);

  if (selectedChat && message) {
    return (
      <div>
        {message?.map((item) => (
          <div key={item?.id} className="chats-output">
            {item?.role === "user" ? (
              <div className="user-message">{item?.text}</div>
            ) : (
              <div>
                {item?.text && (
                  <div className="assistant-message">{item?.text}</div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  return <h1 className="chat-quest">Ready when you are.</h1>;
}
export default ChatMessage;
