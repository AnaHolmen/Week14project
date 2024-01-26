import React, { useState } from "react";

const Stars = ({ rating, onRate }) => {
  const [hoveredRating, setHoveredRating] = useState();

  const handleStarClick = (starRating) => {
    onRate(starRating);
  };

  return (
    <>
      <div className="row">
        <div className="text-left">
          {/* Assuming setRating is defined */}
          <div>
            {/* Render your star components based on the rating */}
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => handleStarClick(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(null)}
                style={{
                  cursor: "pointer",
                  color: star <= (hoveredRating || rating) ? "gold" : "gray",
                }}
              >
                ★
              </span>
            ))}
          </div>
          <p>Rating - {rating}</p>
        </div>
      </div>
    </>
  );
};

export default Stars;
