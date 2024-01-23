import React from "react";

const Stars = ({ rating }) => {
  const maxStars = 5;

  return (
    <div>
      {Array.from({ length: maxStars }, (_, index) => (
        <span
          key={index}
          className={index < rating ? "star-filled" : "star-empty"}
        >
          ⭐
        </span>
      ))}
    </div>
  );
};

export default Stars;
