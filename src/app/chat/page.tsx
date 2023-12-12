"use client";
import React, { useState } from "react";
import Navbar from "../components/navbar";
import Textinput from "../components/textinput";
import Messages from "../components/messages";

export default function Home() {
  const [receivedMessages, setReceivedMessages] = useState<string[]>([]);

  const handleReceiveMessage = (message: string) => {
    // Update the array of received messages
    setReceivedMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <main className="flex min-h-[100vh] flex-col items-center justify-between min-w-[100vw] bg-[#B6D3FE]">
      <Navbar />
      <Textinput onReceiveMessage={handleReceiveMessage} />
      <Messages messages={receivedMessages} />
    </main>
  );
}
