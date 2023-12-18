"use client";
import React, { useState } from "react";

interface TextinputProps {
  setQuestion: (question: string) => void;
  onAskQuestion: () => void;
}

const Textinput: React.FC<TextinputProps> = ({
  setQuestion,
  onAskQuestion,
}) => {
  const [question, setQuestionLocal] = useState<string>("");
  const [isRecording, setIsRecording] = useState<boolean>(false);

  const handleAskQuestion = () => {
    setQuestion(question);
    setQuestionLocal("");
    onAskQuestion();
  };

  const handleRecording = () => {
    if (!isRecording) {
      try {
        const recognition = new (window as any).webkitSpeechRecognition();
        recognition.interimResults = true;
        recognition.lang = "en-US";

        recognition.addEventListener("result", (e: any) => {
          const transcript = Array.from(e.results)
            .map((result: any) => result[0])
            .map((result: any) => result.transcript)
            .join("");

          setQuestionLocal(transcript);
        });

        recognition.start();
        setIsRecording(true);
        console.log("Recording started");
      } catch (error) {
        console.error("Error starting recording:", error);
      }
    } else {
      setIsRecording(false);
      console.log("Recording stopped");
      handleAskQuestion();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAskQuestion();
    }
  };

  return (
    <div className="flex w-[100vw] px-2 fixed bottom-0">
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestionLocal(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Chachaji se poochey"
        className="input input-bordered w-full rounded-tl-full rounded-bl-full"
      />
      <button
        onClick={handleAskQuestion}
        className="input input-bordered w-16 rounded-tr-full rounded-br-full"
      >
        Ask
      </button>
      <button
        onClick={handleRecording}
        className={`input input-bordered rounded-full ${
          isRecording ? "bg-red-500" : ""
        }`}
      >
        REC
        <span className={`${isRecording ? "text-white" : "text-red-500"}`}>
          ●
        </span>
      </button>
    </div>
  );
};

export default Textinput;
