import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EventNoteIcon from "@mui/icons-material/EventNote";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import PinDropIcon from "@mui/icons-material/PinDrop";
import CustomLabel from "../block_like_compoents/CustomLabel";
const WorkHistory = () => {
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
      accepted: false,
      parts_available: "NO",
      completed: true, // Marked as completed
    },
    {
      id: 2,
      title: "Oil Change Required",
      description:
        "The car's engine oil is dirty and needs to be replaced to ensure optimal engine performance and longevity. Neglecting an oil change can lead to engine damage.",
      date: "June 12, 2025",
      price: "$85",
      location: "Minneapolis, MN",
      accepted: false,
      parts_available: "NO",
      completed: true, // Marked as completed
    },
    {
      id: 3,
      title: "Battery Check",
      description:
        "The car's battery is showing signs of weakness, such as slow cranking or difficulty starting in cold weather. A battery check will determine if it needs replacement or maintenance.",
      date: "August 15, 2025",
      price: "$60",
      location: "Bloomington, MN",
      accepted: false,
      parts_available: "NO",
      completed: true, // Marked as completed
    },
  ]);

  const completedJobs = data.filter((job) => job.completed);

  const handleViewMoreClick = (jobId) => {
    const job = completedJobs.find((job) => job.id === jobId);
    if (job) {
      setSelectedJob(job);
      setShowModal(true);
    }
  };

  return (
    <div className="container-fluid p-3">
      <div className="row mb-4">
        <div className="col">
          <h5 className="text-center text-muted">Work History</h5>
        </div>
      </div>
      {completedJobs.length > 0 ? (
        <div className="row row-cols-1 bg-white row-cols-lg-3 g-2">
          {completedJobs.map((job) => (
            <div key={job.id} className="col">
              <CRow
                id={job.id}
                title={job.title}
                date={job.date}
                price={job.price}
                location={job.location}
                description={job.description}
                parts_available={job.parts_available}
                accepted={false} // Not accepted since it's completed
                viewMoreclickHandler={handleViewMoreClick}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No completed work available.</p>
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
            <p>
              <strong>completed:</strong>{" "}
              {completedJobs.completed ? "No" : "Yes"}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <small>This work is completed</small>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default WorkHistory;
const CRow = ({
  id,
  title,
  date,
  price,
  location,
  description,
  parts_available,
  completed,
  onAccept,
  viewMoreclickHandler,
}) => {
  const maxLength = 50;

  return (
    <div
      style={{ width: "100%" }}
      className="container-fluid card shadow-lg border-bottom rounded m-1 border pb-2"
    >
      <div className="row align-items-center">
        <h5 className="col-10">{title}</h5>
        <div className="col-2 text-end">
          <MoreHorizIcon onClick={() => viewMoreclickHandler(id)} />
        </div>
      </div>
      <div className="row">
        <p className="col ps-4">
          {description.length > maxLength
            ? description.substring(0, maxLength) + "..."
            : description}
        </p>
      </div>
      <div className="row ps-2">
        <div className="col">
          <EventNoteIcon className="me-2 row_icons" />
          {date}
        </div>
        <div className="col">
          <PriceCheckIcon className="me-2 row_icons" />
          {price}
        </div>
        <div className="col">
          <PinDropIcon className="me-2 row_icons" />
          {location}
        </div>
        {/* Hide the "Accept" button for completed jobs */}
        {!completed && <div className="col"></div>}
      </div>
    </div>
  );
};
