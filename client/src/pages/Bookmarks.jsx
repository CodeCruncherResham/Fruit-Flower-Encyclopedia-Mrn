// =============================================
// 📁 fruit-flower-encyclopedia/client/src/pages/Bookmarks.jsx
// =============================================

import React, { useEffect, useState } from "react";

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarks(data);
  }, []);

  return (
    <div>
      <h2 className="text-center">🔖 Your Bookmarked Items</h2>
      {bookmarks.length === 0 ? <p>No bookmarks yet.</p> : (
        <ul className="list-group">
          {bookmarks.map((item, i) => (
            <li key={i} className="list-group-item">{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Bookmarks;
