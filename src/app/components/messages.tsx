import React, { useState, useEffect } from "react";

interface MessagesProps {
  messages: { text: string; fromUser: boolean }[];
}

const Messages: React.FC<MessagesProps> = ({ messages }) => {
  const [currentQuestion, setCurrentQuestion] = useState<string>("");

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "hi-IN";
    utterance.pitch = 0.5;
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
  };

  const handleButtonClick = (text: string) => {
    setCurrentQuestion(text);
  };

  useEffect(() => {
    // Get the voice button element
    const voiceButton = document.getElementById("voice");

    // Check if there is a new message and if the voice button is available
    if (messages.length > 0 && voiceButton) {
      // Programmatically click the voice button
      voiceButton.click();
    }
  }, [messages]);

  return (
    <div className="relative scroll-overflow top-[5vh] bottom-[10vh]">
      {messages.map((message, index) => (
        <div
          className={`${
            message.fromUser ? "chat chat-end" : "chat chat-start"
          } animate-fadeInScale`}
          key={message.text}
        >
          <div className="chat-image avatar">
            <div className="w-16 h-16 rounded-full">
              <img
                alt={message.fromUser ? "User Avatar" : "Chatbot Avatar"}
                src={
                  message.fromUser
                    ? "https://cdn-icons-png.flaticon.com/512/1154/1154439.png"
                    : "https://media.licdn.com/dms/image/C4D0BAQEkWJOoS8iGLA/company-logo_200_200/0/1630516424447?e=2147483647&v=beta&t=KrmED5uJgzXgITjPsFnID5PE7oPNMy5k1BMUwqIlasc"
                }
                className={message.fromUser ? "scale-100" : "scale-150"}
              />
            </div>
          </div>
          <div className="chat-footer">
            {message.fromUser ? "You" : "Chachaji"}
            <button
              id="voice"
              onClick={() => {
                speak(message.text);
                if (message.fromUser) {
                  handleButtonClick(message.text);
                }
              }}
            >
              🔊
            </button>
          </div>
          <div className="chat-bubble text-xl bg-white text-black">
            {message.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Messages;
