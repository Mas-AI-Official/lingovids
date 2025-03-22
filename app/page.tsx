"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [backendStatus, setBackendStatus] = useState("Checking...");

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/health")
      .then((res) => res.json())
      .then((data) => setBackendStatus(data.message))
      .catch(() => setBackendStatus("Backend unreachable!"));
  }, []);

  return (
    <main style={{ textAlign: "center", paddingTop: "50px" }}>
      <h1>🚀 LingoVids is Live! 🎉</h1>
      <p>Backend Status: {backendStatus}</p>
    </main>
  );
}