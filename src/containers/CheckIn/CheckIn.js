import React, { Component } from "react";
import { connect } from "react-redux";

import Passengers from "./../../components/Passengers/Passengers";
import { flight } from "../../stores/actions/Flight";
import { authCheck, getSearchParams } from "./../../utils/util";
import Seats from "./../../containers/Seats/Seats"

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
          <Seats />
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
    flightNo: state.pasngrs.flightNo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setPassengerList: (flightNo, filterParam) =>
      dispatch(flight(flightNo, filterParam))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckIn);
