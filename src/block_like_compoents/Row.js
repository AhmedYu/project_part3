import CustomLabel from "./CustomLabel";
import "bootstrap/dist/css/bootstrap.css";
import { Description } from "./Description";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EventNoteIcon from "@mui/icons-material/EventNote";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import PinDropIcon from "@mui/icons-material/PinDrop";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BTN from "./button";
import "../App.css";

export default function Row({
  id,
  title,
  date,
  price,
  location,
  description,
  parts_available,
  accepted,
  onAccept,
  viewMoreclickHandler,
}) {
  let maxLength = 50;

  return (
    <div
      style={{ width: "100%" }}
      className="container-fluid card shadow-lg border-bottom   rounded m-1 border   pb-2"
    >
      <div className="row align-items-center">
        <h5 className="col-10"> {title}</h5>
        <span className="col-2 text-end ">
          <span className="horizontal_more ">
            <MoreHorizIcon
              onClick={
                // Call viewMoreclickHandler with the id

                () => viewMoreclickHandler(id)
              }
            />
          </span>
          <span className=" vertical_more ">
            <MoreVertIcon />
          </span>
        </span>
      </div>

      {/* Description */}
      <div className="row">
        <Description
          description={description.trim().substring(0, maxLength) + "..."}
          cssClass="col ps-4"
        />
      </div>

      <div className="row     ps-2 ">
        <div className=" col   ">
          <EventNoteIcon className="me-2 row_icons  " />
          <CustomLabel labelTitle={date} cssClass="" />
        </div>
        <div className="col ">
          <PriceCheckIcon className="me-2 row_icons  " />
          <CustomLabel labelTitle={price} cssClass="" />
        </div>
        <div className=" col">
          <PinDropIcon className="me-2 row_icons " />
          <CustomLabel labelTitle={location} cssClass="" />
        </div>
        <div className="col ">
          <BTN
            cssStyle={` ${accepted ? "btn btn-danger" : "btn btn-success"}`}
            handler={() => onAccept(id)}
            title={accepted ? "Cancel" : "Accept"}
          ></BTN>
        </div>
      </div>
    </div>
  );
}

function moreClicked() {
  //navigate to more detail view
}
