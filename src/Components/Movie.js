import React, { useState } from "react";
import Stars from "./Stars";
import ReviewList from "./ReviewList";
import ReviewsForm from "./ReviewsForm";

const Movie = ({ movie }) => {
  const [reviews, setReviews] = useState([]);
  const [movieRating, setMovieRating] = useState(movie.rating);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  const { id, image, title, about } = movie;

  return (
    <div>
      <h1>Movie Review</h1>
      <br />

      <h2>{title}</h2>
      <img src={image} className="img" alt={`${title} Movie Poster`} />
      <p>{about}</p>
      {/* Use the Stars component with the dynamic rating and onRate callback */}
      <Stars
        rating={movieRating}
        onRate={(newRating) => setMovieRating(newRating)}
        editable={true}
      />
      <ReviewList reviews={reviews} />
      {/* Pass the movie title to the ReviewForm */}
      <ReviewsForm addReview={addReview} movieTitle={title} />
    </div>
  );
};

export default Movie;
