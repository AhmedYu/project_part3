// App.js (main entry point)
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mechanic_Home_page from "./Screens/Mechanic_Home_page";
import BookedWork from "./Screens/BookedWork";
import WorkHistory from "./Screens/History";
import ReviewComments from "./Screens/ReviewsComments";
import { NavBar } from "./block_like_compoents/NavBar";

function App() {
  const [acceptedJobs, setAcceptedJobs] = useState([]);

  const handleAcceptJob = (job) => {
    setAcceptedJobs((prevJobs) => {
      if (prevJobs.some((j) => j.id === job.id)) {
        return prevJobs.filter((j) => j.id !== job.id); // Remove if already accepted
      }
      return [...prevJobs, job]; // Add new accepted job
    });
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Mechanic_Home_page onAcceptJob={handleAcceptJob} />}
        />
        <Route
          path="/booked"
          element={<BookedWork acceptedJobs={acceptedJobs} />}
        />
        <Route
          path="/history"
          element={<WorkHistory acceptedJobs={acceptedJobs} />}
        />
        <Route path="/comments" element={<ReviewComments />} />
      </Routes>
    </Router>
  );
}

export default App;
