import React, { Component } from "react";
import { connect } from "react-redux";

import Passengers from "./../../components/Passengers/Passengers";
import { flight, updatePassenger } from "../../stores/actions/Flight";
import { authCheck, getSearchParams } from "./../../utils/util";
import Seats from "./../../containers/Seats/Seats";

class CheckIn extends Component {
  getFlightNo() {
    let search = this.props.location.search;
    let searchObj = search
      ? JSON.parse(
          '{"' +
            decodeURI(search)
              .replace("?", "")
              .replace(/"/g, '\\"')
              .replace(/&/g, '","')
              .replace(/=/g, '":"') +
            '"}'
        )
      : {};
    console.log("Flight No:", searchObj);
    return searchObj.flightNo || "";
  }
  getPassengerIdFromSeat = seatNo => {
    let passenger = this.props.pasengrs.filter(
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
    this.props.setPassengerList(params.flightNo);
  };
  handleChange = event => {
    let value = event.target.value;
    let flightNo = this.getFlightNo();
    this.props.setPassengerList(flightNo, value);
    console.log(value);
  };
  componentDidMount() {
    authCheck(this.props.isSignedIn, this.props.history);
    let flightNo = this.getFlightNo();
    this.props.setPassengerList(flightNo);
  }
  render() {
    const search = getSearchParams();
    let elem = (
      <div className="errMsgCont">
        <h1>Please Select the Flight. Go to Home page to select the flight.</h1>
      </div>
    );
    if (search.flightNo !== "undefined") {
      elem = (
        <>
          <h1>
            {this.props.flightName}({this.props.flightNo})
          </h1>
          <Seats
            checkInPassenger={this.checkinPassenger}
            checkedInSeats={[...this.props.checkedInSeats]}
          />
          <h1>Passengers</h1>
          <select name="passengerType" onChange={this.handleChange}>
            <option value="">Select Filter Type</option>
            <option value="checkedIn">Checked In</option>
            <option value="wheelChair">Required Wheel Chair</option>
            <option value="withInfant">With Infants</option>
          </select>
          <Passengers
            {...this.props}
            checkIn={true}
            passengers={[...this.props.pasengrs]}
            flightNo={this.getFlightNo()}
          />
        </>
      );
    }
    return elem;
  }
}

const mapStateToProps = state => {
  return {
    pasengrs: state.pasngrs.passengers,
    isSignedIn: state.auth.isSignedIn,
    flightName: state.pasngrs.flightName,
    flightNo: state.pasngrs.flightNo,
    checkedInSeats: state.pasngrs.checkedInSeats
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setPassengerList: (flightNo, filterParam) =>
      dispatch(flight(flightNo, filterParam)),
    updatePassenger: (flightNo, filterParam, values) =>
      dispatch(updatePassenger(flightNo, filterParam, values))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckIn);
