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
    <div className="flex relative w-[90vw] px-2">
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestionLocal(e.target.value)}
        placeholder="Chachaji se poochey"
        className="input input-bordered w-full rounded-tl-full rounded-bl-full"
      />
      <button
        onClick={handleAskQuestion}
        className="input input-bordered w-16 rounded-tr-full rounded-br-full"
      >
        Ask
      </button>
    </div>
  );
};

export default Textinput;
