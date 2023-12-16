import React, { useState, useRef } from "react";

interface TextinputProps {
  setQuestion: (question: string) => void;
  onAskQuestion: () => void;
}

const Textinput: React.FC<TextinputProps> = ({
  setQuestion,
  onAskQuestion,
}) => {
  const [question, setQuestionLocal] = useState<string>("");
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null
  );
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleAskQuestion = () => {
    setQuestion(question);
    setQuestionLocal("");
    onAskQuestion();
  };

  const handleRecording = async () => {
    if (!isRecording) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        const mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            setAudioBlob(event.data);
          }
        };

        mediaRecorder.start();
        setMediaRecorder(mediaRecorder);
        setIsRecording(true);
        console.log("Recording started");
      } catch (error) {
        console.error("Error starting recording:", error);
      }
    } else {
      if (mediaRecorder) {
        mediaRecorder.stop();
        if (audioBlob) {
          // Convert Blob to base64
          const reader = new FileReader();
          reader.readAsDataURL(audioBlob);
          reader.onloadend = () => {
            if (typeof reader.result === "string") {
              const base64Audio = reader.result.split(",")[1];
              fetch("/api/speech", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ audio: base64Audio }),
              })
                .then((response) => response.json())
                .then((data) => console.log(data.text));
            }
          };
        }
        setIsRecording(false);
        console.log("Recording stopped");
      }
    }
  };

  return (
    <div className="flex relative w-[100vw] px-2">
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
      <button
        onClick={handleRecording}
        className={`input input-bordered rounded-full ${
          isRecording ? "bg-red-500" : ""
        }`}
      >
        REC
        <span className={`${isRecording ? "text-white" : "text-white"}`}>
          ●
        </span>
      </button>
      <audio ref={audioRef} style={{ display: "none" }} controls />
    </div>
  );
};

export default Textinput;
