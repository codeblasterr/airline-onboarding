import React from "react";

import "./Seat.scss";

const Seat = props => {
  return (
    <div
      className={`cls_seat ${props.active ? "active" : ""}`}
      onClick={props.onClick}
    >
      {props.seatNo}
    </div>
  );
};

export default Seat;
