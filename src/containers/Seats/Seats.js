import React, { Component } from "react";
import { connect } from "react-redux";

import Seat from "../../components/Seat/Seat";

import "./Seats.scss";

class Seats extends Component {
  checkinPassenger = seatNo => {
    console.log(seatNo);
  };
  render() {
    let seats = [];
    let alpha = ["A", "B", "C"];
    for (let counter = 0; counter < alpha.length; ++counter) {
      let row = [];
      for (let index = 1; index <= 10; ++index) {
        let seatNo = alpha[counter] + index;
        row.push(
          <Seat
            key={seatNo}
            seatNo={seatNo}
            active={mapStateToProps.checkedInSeats.includes(seatNo)}
            onClick={() => this.checkinPassenger(seatNo)}
          />
        );
      }
      seats.push(<div className="cls_seatRow">{row}</div>);
    }
    return <div className="cls_seatCont">{seats}</div>;
  }
}

const mapStateToProps = state => {
  return {
    checkedInSeats: state.pasngrs.checkedInSeats
  };
};

/* const mapDispatchToProps = dispatch => {
  return {
    setPassengerList: (flightNo, filterParam) =>
      dispatch(flight(flightNo, filterParam))
  };
}; */

export default connect(
  mapStateToProps,
  null
)(Seats);
