import React, { Component } from "react";
import { connect } from "react-redux";

import Passengers from "./../../components/Passengers/Passengers";
import {flight} from '../../stores/actions/Flight';
import {authCheck} from './../../utils/util';

class CheckIn extends Component {
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
    authCheck(this.props.isSignedIn, this.props.histort);
    let flightNo = this.getFlightNo();
    this.props.setPassengerList(flightNo);
  }
  render() {
    return (
      <>
        <h1>Passengers</h1>
        <Passengers {...this.props} checkIn={true} passengers={[...this.props.pasengrs]} />
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
    setPassengerList: (flightNo) => dispatch(flight(flightNo))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckIn);
