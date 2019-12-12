import React, { Component } from "react";
//import { connect } from "react-redux";

import Seat from "../../components/Seat/Seat";
/* import {
  updatePassenger,
  setFlightWithPassenger
} from "./../../stores/actions/Flight"; */

import "./Seats.scss";

class Seats extends Component {
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
            active={this.props.checkedInSeats.includes(seatNo.toLowerCase())}
            onClick={elem => this.props.checkInPassenger(elem, seatNo)}
          />
        );
      }
      seats.push(<div className="cls_seatRow">{row}</div>);
    }
    return <div className="cls_seatCont">{seats}</div>;
  }
}

/* const mapStateToProps = state => {
  return {
    checkedInSeats: state.pasngrs.checkedInSeats,
    passengers: state.pasngrs.passengers
  };
}; */

/* const mapDispatchToProps = dispatch => {
  return {
    updatePassenger: (flightNo, filterParam, values) =>
      dispatch(updatePassenger(flightNo, filterParam, values)),
    setFlightWithPassenger: flightNo => {
      dispatch(setFlightWithPassenger(flightNo));
    }
  };
}; */

export default Seats;
