import Row from "../block_like_compoents/Row";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavBar } from "../block_like_compoents/NavBar";
import {
  Modal,
  Button,
  ModalDialog,
  ModalBody,
  ModalHeader,
} from "react-bootstrap";

export default function Mechanic_Home_page() {
  const [showModal, setShowModal] = useState(false);

  // Example data for the rows
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
    },
    {
      id: 2,
      title: "Front Brakes Issue",
      description:
        "The car's front brake pads are worn down, causing squealing noises and reduced braking performance. The brake rotors may also be damaged, leading to vibration and increased stopping distance.",
      date: "May 23, 2025",
      price: "$235",
      location: "St. Paul, MN",
      accepted: false,
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
      accepted: false,
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
      accepted: false,
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
      accepted: false,
      parts_available: "NO",
    },
  ]);
  function handleViewMoreClick(jobKey) {
    alert(`hey with id:, ${jobKey}`);
    setShowModal(!showModal);
  }
  const handleAccept = (id) => {
    setData((prevData) =>
      prevData.map((job) =>
        job.id === id ? { ...job, accepted: !job.accepted } : job
      )
    );
  };
  return (
    <div className="container-fluid p-3  ">
      <NavBar />
      <div className="row mb-4">
        <div className="col">
          <h5 className="text-center text-muted ">Mechanic Jobs</h5>
        </div>
      </div>
      <div className="row row-cols-1 bg-white row-cols-lg-3 g-2  ">
        {data.map((job) => (
          <div key={job.id} className="col ">
            <Row
              id={job.id}
              title={job.title}
              date={job.date}
              price={job.price}
              location={job.location}
              description={job.description}
              parts_available={job.parts_available}
              accepted={job.accepted}
              onAccept={handleAccept} // change the acceptance to false or true
              viewMoreclickHandler={handleViewMoreClick}
            />
          </div>
        ))}
      </div>
      if(showModal)
      {
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          {
            <ModalDialog>
              <ModalBody>
                <ModalHeader>this will have the title</ModalHeader>
              </ModalBody>
            </ModalDialog>
          }
        </Modal>
      }
    </div>
  );
}
