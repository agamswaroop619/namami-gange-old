import React from "react";

interface MessagesProps {
  messages: string[];
}

const Messages: React.FC<MessagesProps> = ({ messages }) => {
  return (
    <div>
      <h2>Messages Received:</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
