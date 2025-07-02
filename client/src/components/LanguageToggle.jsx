import React, { useState } from "react";

function LanguageToggle({ onToggle }) {
  const [lang, setLang] = useState("en");

  const handleChange = () => {
    const newLang = lang === "en" ? "hi" : "en";
    setLang(newLang);
    onToggle(newLang);
  };

  return (
    <div className="text-end">
      <button className="btn btn-sm btn-outline-secondary" onClick={handleChange}>
        🌐 {lang === "en" ? "हिन्दी" : "English"}
      </button>
    </div>
  );
}

export default LanguageToggle;
