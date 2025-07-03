import React, { useState } from "react";

function LanguageToggle({ onToggle }) {
  const storedLang = localStorage.getItem("lang") || "en";
  const [lang, setLang] = useState(storedLang);

  const handleChange = () => {
    const newLang = lang === "en" ? "hi" : "en";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    onToggle(newLang);
  };

  return (
    <div className="text-end">
      <button
        className="btn btn-sm btn-outline-secondary"
        onClick={handleChange}
      >
        🌐 {lang === "en" ? "हिन्दी" : "English"}
      </button>
    </div>
  );
}

export default LanguageToggle;
