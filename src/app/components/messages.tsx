import React from "react";

interface MessagesProps {
  messages: string[];
}

const Messages: React.FC<MessagesProps> = ({ messages }) => {
  return (
    <div>
      {messages.map((message, index) => (
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-16 h-16 rounded-full">
              <img
                alt="chachaji"
                src="https://media.licdn.com/dms/image/C4D0BAQEkWJOoS8iGLA/company-logo_200_200/0/1630516424447?e=2147483647&v=beta&t=KrmED5uJgzXgITjPsFnID5PE7oPNMy5k1BMUwqIlasc"
                className="scale-150"
              />
            </div>
          </div>
          <div className="chat-bubble">
            <ul>
              <li key={index}>{message}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Messages;
