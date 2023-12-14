// Textinput.tsx
"use client";
import React, { useState } from "react";

interface TextinputProps {
  setQuestion: (question: string) => void; // Update this line
}

const Textinput: React.FC<TextinputProps> = ({ setQuestion }) => {
  const [question, setQuestionLocal] = useState<string>("");

  const handleAskQuestion = () => {
    // Pass the question to the parent component
    setQuestion(question);
    // Clear the input field after asking the question
    setQuestionLocal("");
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
      <button
        onClick={handleAskQuestion}
        className="input input-bordered max-w-xs"
      >
        Ask
      </button>
    </div>
  );
};

export default Textinput;
