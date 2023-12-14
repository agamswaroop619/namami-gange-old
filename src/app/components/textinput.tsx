// Textinput.tsx
"use client";
import React, { useState } from "react";

interface TextinputProps {
  onReceiveMessage: (message: string) => void;
  setQuestion: React.Dispatch<React.SetStateAction<string>>;
  updateMessages: () => void; // Callback to trigger message update in the parent component
}

const Textinput: React.FC<TextinputProps> = ({
  onReceiveMessage,
  setQuestion,
  updateMessages,
}) => {
  const [question, setQuestionLocal] = useState<string>("");

  const askQuestion = () => {
    fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: question }),
    })
      .then((response) => response.json())
      .then((data) => {
        setQuestionLocal(""); // Clear the input field after asking the question
        onReceiveMessage(data.messageT); // Pass the received message to the parent component
        setQuestion(question); // Update the current question in the parent component
        updateMessages(); // Trigger message update in the parent component
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestionLocal(e.target.value)}
        placeholder="Chachaji se poochey"
        className="input input-bordered w-full max-w-xs"
      />
      <button onClick={askQuestion}>Ask</button>
    </div>
  );
};

export default Textinput;
