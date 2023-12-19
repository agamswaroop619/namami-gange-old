"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Textinput from "../components/textinput";
import Messages from "../components/messages";
import Image from "next/image";
import Namami from "../components/namami_gange.gif";

function getChat(prompt: string) {
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
  const [receivedMessages, setReceivedMessages] = useState<
    { text: string; fromUser: boolean }[]
  >([]);
  const [currentQuestion, setCurrentQuestion] = useState<string>(
    "Give a small introduction of yours in 10 words"
  );

  const handleReceiveMessage = (message: string, fromUser: boolean) => {
    setReceivedMessages((prevMessages) => [
      ...prevMessages,
      { text: message, fromUser },
    ]);
  };

  const updateMessages = (question: string) => {
    handleReceiveMessage(question, true); // User's question
    getChat(question).then((response) => {
      handleReceiveMessage(response, false); // Chatbot's response
    });
  };

  let temp_fix = 0;
  useEffect(() => {
    if (temp_fix === 0) temp_fix++;
    else {
      if (typeof window !== "undefined") {
        getChat(currentQuestion).then((response) => {
          handleReceiveMessage(response, false);
        });
      }
    }
  }, [currentQuestion]);

  useEffect(() => {
    console.log("currentQuestion changed:", currentQuestion);
    if (currentQuestion !== "Give a small introduction of yours in 10 words") {
      updateMessages(currentQuestion);
    }
  }, [currentQuestion]);

  return (
    <main className="flex min-h-[100vh] flex-col items-center justify-between min-w-[100vw] bg-[#B6D3FE] absolute">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <Image
          src={Namami}
          alt=""
          className="mix-blend-multiply opacity-75 z-[0]"
        />
      </div>
      <Messages messages={receivedMessages} />
      <Textinput setQuestion={setCurrentQuestion} onAskQuestion={() => {}} />
    </main>
  );
}
