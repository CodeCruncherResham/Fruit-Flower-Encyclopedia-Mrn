
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Add this if not already

function Home() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

const handleSearch = async () => {
  if (query.trim() === "") return;

  try {
    const res = await axios.get(`/api/search/${query}`);
    const { type } = res.data;
    navigate(`/${type}/${query}`);
  } catch {
    alert("Item not found!");
  }
};


  const handleVoice = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.onresult = (event) => {
      const speech = event.results[0][0].transcript;
      setQuery(speech);
    };
    recognition.start();
  };

  return (
    <div className="text-center">
      <h1 className="mb-4">🍎 Explore Fruits & 🌸 Flowers</h1>
      <div className="input-group w-75 mx-auto mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Type or say a fruit/flower name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>Search</button>
        <button className="btn btn-outline-secondary" onClick={handleVoice}>🎙️</button>
      </div>
    </div>
  );
}

export default Home;

