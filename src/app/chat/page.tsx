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

  const handleReceiveMessage = (message: string) => {
    // Update the array of received messages
    setReceivedMessages((prevMessages) => [...prevMessages, message]);
  };

  useEffect(() => {
    getChat().then((d) => console.log(d));
  });

  return (
    <main className="flex min-h-[100vh] flex-col items-center justify-between min-w-[100vw] bg-[#B6D3FE]">
      <Navbar />
      <Textinput onReceiveMessage={handleReceiveMessage} />
      <Messages messages={receivedMessages} />
    </main>
  );
}
