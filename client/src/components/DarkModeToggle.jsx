import React, { useEffect, useState } from "react";

function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) document.body.classList.add("dark-mode");
    else document.body.classList.remove("dark-mode");
  }, [dark]);

  return (
    <div className="form-check form-switch text-end">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="darkSwitch"
        checked={dark}
        onChange={() => setDark(!dark)}
      />
      <label className="form-check-label ms-2" htmlFor="darkSwitch">
        🌗 Dark Mode
      </label>
    </div>
  );
}

export default DarkModeToggle;
