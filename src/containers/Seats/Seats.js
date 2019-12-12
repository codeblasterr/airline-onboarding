import React, { Component } from "react";
import { connect } from "react-redux";

import Seat from "../../components/Seat/Seat";
import { getSearchParams } from "./../../utils/util";
import {
  updatePassenger,
  setFlightWithPassenger
} from "./../../stores/actions/Flight";

import "./Seats.scss";

class Seats extends Component {
  getPassengerIdFromSeat = seatNo => {
    let passenger = this.props.passengers.filter(
      passenger => passenger.seatNo === seatNo.toLowerCase()
    );
    return passenger[0].id;
  };
  checkinPassenger = (elem, seatNo) => {
    let params = getSearchParams();
    let isSelect = !elem.target.classList.contains("active");
    let values = {
      checkedIn: isSelect
    };
    let passengerId = this.getPassengerIdFromSeat(seatNo);
    this.props.updatePassenger(params.flightNo, passengerId, values);
    this.props.setFlightWithPassenger(params.flightNo);
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
            active={this.props.checkedInSeats.includes(seatNo.toLowerCase())}
            onClick={elem => this.checkinPassenger(elem, seatNo)}
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
    checkedInSeats: state.pasngrs.checkedInSeats,
    passengers: state.pasngrs.passengers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updatePassenger: (flightNo, filterParam, values) =>
      dispatch(updatePassenger(flightNo, filterParam, values)),
    setFlightWithPassenger: flightNo => {
      dispatch(setFlightWithPassenger(flightNo));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Seats);
