import React, { Component } from "react";
import { connect } from "react-redux";

import Passengers from "./../../components/Passengers/Passengers";
import { flight } from "../../stores/actions/Flight";
import { authCheck } from "./../../utils/util";

class CheckIn extends Component {
  getFlightNo() {
    let search = this.props.location.search || "{}";
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
    authCheck(this.props.isSignedIn, this.props.histort);
    let flightNo = this.getFlightNo();
    this.props.setPassengerList(flightNo);
  }
  render() {
    return (
      <>
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
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    pasengrs: state.pasngrs.passengers,
    isSignedIn: state.auth.isSignedIn
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
