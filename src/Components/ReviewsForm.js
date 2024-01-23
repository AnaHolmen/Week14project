import React, { useState } from "react";

const ReviewForm = ({ addReview, movieTitle }) => {
  const [reviewText, setReviewText] = useState("");

  const handleChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Pass the movie title along with the review text
    addReview(`${movieTitle}: ${reviewText}`);
    setReviewText("");
  };

  // Nested Review component
  const Review = ({ text }) => <p>{text}</p>;

  return (
    <div>
      {/* Review Form */}
      <form onSubmit={handleSubmit}>
        <textarea
          rows="3"
          placeholder={`Leave a review for ${movieTitle}...`}
          value={reviewText}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit Review</button>
      </form>

      {/* Display the submitted review using the nested Review component */}
      {reviewText && <Review text={`${movieTitle}: ${reviewText}`} />}
    </div>
  );
};

export default ReviewForm;
