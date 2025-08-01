import React, { useEffect, useState } from "react";
import axios from "axios";

function ReviewForm({ itemName, itemType }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleSubmit = async () => {
    await axios.post("/api/reviews", {
      itemType,
      itemName,
      rating,
      comment,
    });
    setComment("");
    // Refresh reviews after submitting
    fetchReviews();
  };

  const fetchReviews = async () => {
    try {
      const res = await axios.get(`/api/reviews/${itemName}`);
      setReviews(res.data);
    } catch (err) {
      console.error("Error fetching reviews:", err);
    }
  };

  useEffect(() => {
    // Define fetch inside useEffect to avoid dependency issue
    const fetchReviewsInsideEffect = async () => {
      try {
        const res = await axios.get(`/api/reviews/${itemName}`);
        setReviews(res.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
      }
    };

    fetchReviewsInsideEffect();
  }, [itemName]); // Only depends on itemName

  return (
    <div className="mt-4">
      <h5>Leave a Review</h5>
      <div className="mb-2">
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="form-select w-auto d-inline"
        >
          {[1, 2, 3, 4, 5].map((r) => (
            <option key={r} value={r}>
              {r} ★
            </option>
          ))}
        </select>
      </div>
      <textarea
        className="form-control mb-2"
        placeholder="Write a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button className="btn btn-sm btn-success" onClick={handleSubmit}>
        Submit Review
      </button>

      <div className="mt-4">
        <h6>Reviews</h6>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <ul className="list-group">
            {reviews.map((rev, i) => (
              <li key={i} className="list-group-item">
                <strong>{rev.rating} ★</strong> - {rev.comment}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ReviewForm;
