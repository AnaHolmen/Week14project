import React, { useState } from "react";
import Stars from "./Stars";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";

const Movie = ({ title, image, synopsis, rating }) => {
  const [reviews, setReviews] = useState([]);

  const addReview = (review) => {
    setReviews((prevReviews) => [...prevReviews, review]);
  };

  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt={`${title} Poster`} />
      <p>{synopsis}</p>
      <Stars rating={rating} />
      <ReviewList reviews={reviews} />
      {/* Pass the movie title to the ReviewForm */}
      <ReviewForm addReview={addReview} movieTitle={title} />
    </div>
  );
};

export default Movie;
