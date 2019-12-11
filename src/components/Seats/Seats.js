import React from "react";

import Seat from "./Seat/Seat";

import "./Seats.scss";

const Seats = () => {
  let seats = [];
  let alpha = ["A", "B", "C"];
  for (let counter = 0; counter < alpha.length; ++counter) {
    let row = [];
    for (let index = 1; index <= 10; ++index) {
      row.push(
        <Seat key={alpha[counter] + index} seatNo={alpha[counter] + index} />
      );
    }
    seats.push(<div className="cls_seatRow">{row}</div>);
  }
  return <div className="cls_seatCont">{seats}</div>;
};

export default Seats;
