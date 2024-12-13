import React, { useState } from "react";
import Row from "../block_like_compoents/Row";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export default function BookedWork() {
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const [data, setData] = useState([
    {
      id: 1,
      title: "Front Brakes Issue",
      description:
        "The car's front brake pads are worn down, causing squealing noises and reduced braking performance. The brake rotors may also be damaged, leading to vibration and increased stopping distance.",
      date: "May 23, 2025",
      price: "$235",
      location: "St. Paul, MN",
      accepted: true,
      parts_available: "NO",
    },
    {
      id: 2,
      title: "Front Brakes Issue",
      description:
        "The car's front brake pads are worn down, causing squealing noises and reduced braking performance. The brake rotors may also be damaged, leading to vibration and increased stopping distance.",
      date: "May 23, 2025",
      price: "$235",
      location: "St. Paul, MN",
      accepted: true,
      parts_available: "YES",
    },
    {
      id: 3,
      title: "Oil Change Required",
      description:
        "The car's engine oil is dirty and needs to be replaced to ensure optimal engine performance and longevity. Neglecting an oil change can lead to engine damage.",
      date: "June 12, 2025",
      price: "$85",
      location: "Minneapolis, MN",
      accepted: false,
      parts_available: "NO",
    },
    {
      id: 4,
      title: "Tire Replacement Needed",
      description:
        "The car's tires are worn down, with low tread depth, affecting traction, handling, and braking performance. Replacing the tires is crucial for safety and fuel efficiency.",

      date: "July 7, 2025",
      price: "$400",
      location: "Eagan, MN",
      accepted: false,
      parts_available: "YES",
    },
    {
      id: 5,
      title: "Tire Replacement Needed",
      description:
        "The car's tires are worn down, with low tread depth, affecting traction, handling, and braking performance. Replacing the tires is crucial for safety and fuel efficiency.",

      date: "July 7, 2025",
      price: "$400",
      location: "Eagan, MN",
      accepted: true,
      parts_available: "NO",
    },
    {
      id: 6,
      title: "Tire Replacement Needed",
      description:
        "The car's tires are worn down, with low tread depth, affecting traction, handling, and braking performance. Replacing the tires is crucial for safety and fuel efficiency.",

      date: "July 7, 2025",
      price: "$400",
      location: "Eagan, MN",
      accepted: true,
      parts_available: "YES",
    },
    {
      id: 7,
      title: "Battery Check",
      description:
        "The car's battery is showing signs of weakness, such as slow cranking or difficulty starting in cold weather. A battery check will determine if it needs replacement or maintenance.",

      date: "August 15, 2025",
      price: "$60",
      location: "Bloomington, MN",
      accepted: true,
      parts_available: "NO",
    },
  ]);

  const bookedJobs = data.filter((job) => job.accepted);

  const handleViewMoreClick = (jobId) => {
    const job = bookedJobs.find((job) => job.id === jobId);
    if (job) {
      setSelectedJob(job);
      setShowModal(true);
    }
  };

  const handleCancel = (id) => {
    setData((prevData) =>
      prevData.map((job) => (job.id === id ? { ...job, accepted: false } : job))
    );
  };

  return (
    <div className="container-fluid p-3">
      <div className="row mb-4">
        <div className="col">
          <h5 className="text-center text-muted">Booked Work</h5>
        </div>
      </div>
      {bookedJobs.length > 0 ? (
        <div className="row row-cols-1 bg-white row-cols-lg-3 g-2">
          {bookedJobs.map((job) => (
            <div key={job.id} className="col">
              <Row
                id={job.id}
                title={job.title}
                date={job.date}
                price={job.price}
                location={job.location}
                description={job.description}
                parts_available={job.parts_available}
                accepted={job.accepted}
                onAccept={handleCancel} // Change to cancel
                viewMoreclickHandler={handleViewMoreClick}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No booked work available.</p>
      )}

      {showModal && selectedJob && (
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedJob.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <strong>Description:</strong> {selectedJob.description}
            </p>
            <p>
              <strong>Date:</strong> {selectedJob.date}
            </p>
            <p>
              <strong>Price:</strong> {selectedJob.price}
            </p>
            <p>
              <strong>Location:</strong> {selectedJob.location}
            </p>
            <p>
              <strong>Parts Available:</strong> {selectedJob.parts_available}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}
