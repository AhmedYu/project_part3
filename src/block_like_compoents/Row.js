import CustomLabel from "./CustomLabel";
import "bootstrap/dist/css/bootstrap.css";
import { Description } from "./Description";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EventNoteIcon from "@mui/icons-material/EventNote";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import PinDropIcon from "@mui/icons-material/PinDrop";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BTN from "./button";

export default function Row({
  id,
  title,
  date,
  price,
  location,
  description,
  accepted,
  onAccept,
  viewMoreclickHandler,
}) {
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
        <div className="col">
          <BTN
            cssStyle={`btn ${accepted ? "btn-danger" : "btn-success"}`}
            handler={() => onAccept(id)}
            title={accepted ? "Cancel" : "Accept"}
          />
        </div>
      </div>
    </div>
  );
}
