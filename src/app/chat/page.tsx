// Home.tsx
"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Textinput from "../components/textinput";
import Messages from "../components/messages";

function getChat(prompt: string = "What is Namami Gange as poem, chacha") {
  return fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt: prompt }),
  })
    .then((res) => res.json())
    .then((json) => json.messageT);
}

export default function Home() {
  const [receivedMessages, setReceivedMessages] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<string>(
    "What is Namami Gange as poem, chacha"
  );

  const handleReceiveMessage = (message: string) => {
    // Update the array of received messages
    setReceivedMessages((prevMessages) => [...prevMessages, message]);
  };

  const updateMessages = () => {
    // Fetch the response for the updated question and update messages
    getChat(currentQuestion).then((response) => {
      handleReceiveMessage(response);
    });
  };

  useEffect(() => {
    updateMessages(); // Fetch initial message when the component mounts
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <main className="flex min-h-[100vh] flex-col items-center justify-between min-w-[100vw] bg-[#B6D3FE]">
      <Navbar />
      <Textinput
        onReceiveMessage={handleReceiveMessage}
        setQuestion={setCurrentQuestion} // Pass a function to set the current question
        updateMessages={updateMessages} // Pass a function to update messages
      />
      <Messages messages={receivedMessages} />
    </main>
  );
}
