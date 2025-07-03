import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReviewForm from "../components/ReviewForm";

function FlowerPage() {
  const { name } = useParams();
  const [flower, setFlower] = useState(null);

  useEffect(() => {
    axios.get(`/api/flowers/${name}`).then((res) => setFlower(res.data));
  }, [name]);

  const handleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    if (!bookmarks.includes(name)) {
      bookmarks.push(name);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
      alert("Bookmarked successfully!");
    }
  };

  if (!flower) return <p>Loading...</p>;

  return (
    <div className="card shadow p-4">
      <h2>
        {flower.name}{" "}
        <button className="btn btn-outline-warning btn-sm" onClick={handleBookmark}>
          🔖 Bookmark
        </button>
      </h2>
      <img src={flower.image} alt={flower.name} className="img-fluid mb-3 rounded" />
      <p>{flower.description}</p>

      {flower.scientificName && (
        <>
          <h5>Scientific Name:</h5>
          <p>{flower.scientificName}</p>
        </>
      )}

      {flower.culturalMeaning && (
        <>
          <h5>Cultural Meaning:</h5>
          <p>{flower.culturalMeaning}</p>
        </>
      )}

      {flower.colorVariants && flower.colorVariants.length > 0 && (
        <>
          <h5>Color Variants:</h5>
          <ul>
            {flower.colorVariants.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </>
      )}

      {flower.uses && flower.uses.length > 0 && (
        <>
          <h5>Uses:</h5>
          <ul>
            {flower.uses.map((u, i) => (
              <li key={i}>{u}</li>
            ))}
          </ul>
        </>
      )}

      {/* ✅ Review Section */}
      <ReviewForm itemName={flower.name} />
    </div>
  );
}

export default FlowerPage;
