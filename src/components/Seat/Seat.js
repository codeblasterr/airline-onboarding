import React from "react";

import './Seat.scss';

const Seat = props => {
  return <div className="cls_seat" onClick={props.onClick}>{props.seatNo}</div>;
};

export default Seat;
