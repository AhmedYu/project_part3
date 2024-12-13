import React from "react";

const StarRating = ({ rating }) => {
  // Create an array of 5 items, each representing a star
  const stars = Array(5).fill(0);

  return (
    <div className="star-rating">
      {stars.map((_, index) => (
        <span
          key={index}
          style={{ color: index < rating ? "#FFD700" : "#ccc" }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
