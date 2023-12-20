"use client";
import { useState } from "react";

interface ApiResponse {
  message: string;
  // Add other fields if needed based on the actual response structure
}

export default function Home() {
  const [query, setQuery] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://98.70.48.5:5565/query/${query}`);
      const data: ApiResponse = await response.json();

      // Assuming the response structure has a 'message' field
      setResult(data.message);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <main className="min-h-screen items-center justify-between min-w-full bg-gradient-to-b from-[#FFFFFF] to-[#39B5E9] absolute">
      <input
        type="text"
        placeholder="Type here"
        className="input w-full max-w-xs"
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        <h2>API Result:</h2>
        <div>{result}</div>
      </div>
    </main>
  );
}
