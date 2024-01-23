import React, { useState } from "react";

const ReviewForm = ({ addReview }) => {
  const [reviewText, setReviewText] = useState("");

  const handleChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addReview(reviewText);
    setReviewText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        rows="3"
        placeholder="Leave a review..."
        value={reviewText}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
