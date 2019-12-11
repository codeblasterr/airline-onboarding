import React, { Component } from "react";
import { connect } from "react-redux";

import Passengers from "./../../components/Passengers/Passengers";
import { flight } from "../../stores/actions/Flight";
import { authCheck, getSearchParams } from "./../../utils/util";

class InFlight extends Component {
  getFlightNo() {
    let search = this.props.location.search || "{}";
    let searchObj = JSON.parse(
      '{"' +
        decodeURI(search)
          .replace("?", "")
          .replace(/"/g, '\\"')
          .replace(/&/g, '","')
          .replace(/=/g, '":"') +
        '"}'
    );
    console.log("Flight No:", searchObj);
    return searchObj.flightNo || "";
  }
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
          <h1>Passengers</h1>
          <Passengers
            {...this.props}
            checkIn={false}
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
    setPassengerList: flightNo => dispatch(flight(flightNo))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InFlight);
