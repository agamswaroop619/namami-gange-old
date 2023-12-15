// Messages.tsx
import React from "react";

interface MessagesProps {
  messages: { text: string; fromUser: boolean }[];
}

const Messages: React.FC<MessagesProps> = ({ messages }) => {
  return (
    <div>
      {messages.map((message, index) => (
        <div
          className={message.fromUser ? "chat chat-end" : "chat chat-start"}
          key={index}
        >
          <div className="chat-image avatar">
            <div className="w-16 h-16 rounded-full">
              <img
                alt={message.fromUser ? "User Avatar" : "Chatbot Avatar"}
                src={
                  message.fromUser
                    ? "User Avatar"
                    : "https://media.licdn.com/dms/image/C4D0BAQEkWJOoS8iGLA/company-logo_200_200/0/1630516424447?e=2147483647&v=beta&t=KrmED5uJgzXgITjPsFnID5PE7oPNMy5k1BMUwqIlasc"
                }
                className="scale-150"
              />
            </div>
          </div>
          <div className="chat-footer">
            {message.fromUser ? "You" : "Chachaji"}
          </div>
          <div className="chat-bubble">{message.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Messages;
