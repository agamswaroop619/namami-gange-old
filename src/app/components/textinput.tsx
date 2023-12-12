"use client";
import React, { useState } from "react";

interface TextinputProps {
  // Define any props that your component might need
}

const Textinput: React.FC<TextinputProps> = () => {
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  const askQuestion = () => {
    fetch("http://localhost:3000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: question }),
    })
      .then((response) => response.text())
      .then((data) => setAnswer(data))
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
