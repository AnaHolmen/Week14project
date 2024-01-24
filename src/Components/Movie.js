import React, { useState } from "react";
import Stars from "./Stars";
import ReviewList from "./ReviewList";
import ReviewsForm from "./ReviewsForm";

const Movie = ({ movie }) => {
  const [reviews, setReviews] = useState([]);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  let { id, image, title, about, year, rating, length } = movie;

  console.log(id, image, title, about, year, rating, length);

  return (
    <div key={id}>
      <h2>{title}</h2>
      <img src={image} className="img" alt={`${title} Poster`} />
      <p>{about}</p>
      <Stars rating={rating} />
      <ReviewList reviews={reviews} key={id} />
      {/* Pass the movie title to the ReviewForm */}
      <ReviewsForm addReview={addReview} movieTitle={title} />
    </div>
  );
};

export default Movie;
