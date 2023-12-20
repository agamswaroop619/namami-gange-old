import Image from "next/image";

async function getNews() {
  try {
    const response = await fetch("/api/news", {
      method: "GET", // Use GET method as per your server-side API configuration
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("All Results:", data.results); // Log all results

    return data.messageT; // Assuming messageT is a property in your actual response
  } catch (error) {
    console.error("Error fetching news:", error);
    return null; // Handle error as needed
  }
}

export default function Home() {
  // Call the getNews function and log the result
  getNews().then((result) => console.log("Result from getNews:", result));

  return (
    <main className="flex min-h-[100vh] flex-col items-center justify-between min-w-[100vw] bg-[#B6D3FE]">
      {/* Render your other components/content here */}
    </main>
  );
}
