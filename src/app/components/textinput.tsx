"use client";
import React, { useState } from "react";

interface TextinputProps {
  onReceiveMessage: (message: string) => void;
}

const Textinput: React.FC<TextinputProps> = ({ onReceiveMessage }) => {
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  const askQuestion = () => {
    console.log("hello");
    fetch("/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: question }),
    })
      .then((response) => response.text())
      .then((data) => {
        setAnswer(data);
        onReceiveMessage(data); // Pass the received message to the parent component
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
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button onClick={askQuestion}>Ask</button>
      <p>{answer}</p>
    </div>
  );
};

export default Textinput;
