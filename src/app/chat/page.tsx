// Home.tsx
"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Textinput from "../components/textinput";
import Messages from "../components/messages";

function getChat(prompt: string = "Give a small introduction in of yours") {
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
    "Give a small introduction in of yours"
  );

  const handleReceiveMessage = (message: string) => {
    setReceivedMessages((prevMessages) => [...prevMessages, message]);
  };

  const updateMessages = (question: string) => {
    getChat(question).then((response) => {
      handleReceiveMessage(response);
    });
  };
  let temp_fix = 0;
  useEffect(() => {
    // Fetch the initial response only on the client side
    if (temp_fix == 0) temp_fix++;
    else {
      if (typeof window !== "undefined") {
        getChat(currentQuestion).then((response) => {
          handleReceiveMessage(response);
        });
      }
    }
  }, [currentQuestion]);

  useEffect(() => {
    console.log("currentQuestion changed:", currentQuestion);

    // Fetch the response for the updated question and update messages
    if (currentQuestion !== "Give a small introduction in of yours") {
      updateMessages(currentQuestion);
    }
  }, [currentQuestion]);

  return (
    <main className="flex min-h-[100vh] flex-col items-center justify-between min-w-[100vw] bg-[#B6D3FE]">
      <Navbar />
      <Messages messages={receivedMessages} />
      <Textinput setQuestion={setCurrentQuestion} />
    </main>
  );
}
