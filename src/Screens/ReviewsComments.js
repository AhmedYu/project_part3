// ReviewComments.js
import React from "react";
import { useState } from "react";
import StarRating from "../block_like_compoents/StarRatings";
const ReviewComments = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      jobTitle: "Front Brakes Issue",
      customer: "John Doe",
      comment: "Great work! My brakes are working perfectly now.",
      rating: 5,
      date: "2024-11-14",
    },
    {
      id: 2,
      jobTitle: "Oil Change Required",
      customer: "Jane Smith",
      comment: "Service was quick and professional. Will visit again.",
      rating: 4,
      date: "2024-11-13",
    },
    {
      id: 3,
      jobTitle: "Battery Check",
      customer: "Michael Brown",
      comment: "Found the issue quickly and replaced the battery efficiently.",
      rating: 5,
      date: "2024-11-12",
    },
    {
      id: 4,
      jobTitle: "Tire Replacement Needed",
      customer: "Emily White",
      comment: "Good service, but the prices were a bit high.",
      rating: 3,
      date: "2024-11-10",
    },
    {
      id: 5,
      jobTitle: "Replace Air Filter",
      customer: "David Johnson",
      comment: "The job was done well, and the mechanic was friendly.",
      rating: 4,
      date: "2024-11-09",
    },
    {
      id: 6,
      jobTitle: "Wiper Blades Replacement",
      customer: "Sophia Green",
      comment: "Quick and easy service. No complaints.",
      rating: 5,
      date: "2024-11-08",
    },
    {
      id: 7,
      jobTitle: "Engine Tune-up",
      customer: "James Taylor",
      comment: "Engine runs smoother now. Highly recommend!",
      rating: 5,
      date: "2024-11-07",
    },
    {
      id: 8,
      jobTitle: "Oil Change Required",
      customer: "Olivia Martin",
      comment: "Decent service but took longer than expected.",
      rating: 3,
      date: "2024-11-06",
    },
  ]);

  return (
    <div>
      <h2>Customer Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id} className="review-card card">
          <div class="card-body">
            <h4>{review.jobTitle}</h4>
            <p className=" ">
              <strong>Customer:</strong> {review.customer}
            </p>
            <p>
              <strong>Comment:</strong> {review.comment}
            </p>
            <p>
              <StarRating rating={review.rating} />
            </p>
            <p>
              <strong>Date:</strong> {review.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewComments;
