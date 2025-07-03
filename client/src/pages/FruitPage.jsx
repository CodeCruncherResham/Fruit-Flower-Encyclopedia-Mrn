import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReviewForm from "../components/ReviewForm";

function FruitPage() {
  const { name } = useParams();
  const [fruit, setFruit] = useState(null);

  useEffect(() => {
    axios.get(`/api/fruits/${name}`).then((res) => setFruit(res.data));
  }, [name]);

  const handleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    if (!bookmarks.includes(name)) {
      bookmarks.push(name);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
      alert("Bookmarked successfully!");
    }
  };

  if (!fruit) return <p>Loading...</p>;

  return (
    <div className="card shadow p-4">
      <h2>
        {fruit.name}{" "}
        <button className="btn btn-outline-warning btn-sm" onClick={handleBookmark}>
          🔖 Bookmark
        </button>
      </h2>
      <img src={fruit.image} alt={fruit.name} className="img-fluid mb-3 rounded" />
      <p>{fruit.description}</p>

      {fruit.scientificName && (
        <>
          <h5>Scientific Name:</h5>
          <p>{fruit.scientificName}</p>
        </>
      )}

      {fruit.nutrition && fruit.nutrition.length > 0 && (
        <>
          <h5>Nutritional Value:</h5>
          <ul>
            {fruit.nutrition.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </>
      )}

      {fruit.medicinalUses && fruit.medicinalUses.length > 0 && (
        <>
          <h5>Medicinal Uses:</h5>
          <ul>
            {fruit.medicinalUses.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </>
      )}

      {fruit.variants && fruit.variants.length > 0 && (
        <>
          <h5>Variants:</h5>
          <ul>
            {fruit.variants.map((v, i) => (
              <li key={i}>{v}</li>
            ))}
          </ul>
        </>
      )}

      {/* ✅ Review Section */}
      <ReviewForm itemName={fruit.name} />
    </div>
  );
}

export default FruitPage;
