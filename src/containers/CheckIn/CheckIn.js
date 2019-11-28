import React, { Component } from "react";
import { connect } from "react-redux";

import Passengers from "./../../components/Passengers/Passengers";
import {passengerList} from '../../stores/actions/Passengers'

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
    let flightNo = this.getFlightNo();
    this.props.setPassengerList(flightNo);
    /*this.setState({
      ...this.state,
      passengers
    });*/
  }
  render() {
    return (
      <>
        <h1>Passengers</h1>
        <Passengers passengers={[...this.props.pasengrs]} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    pasengrs: state.pasngrs.passengers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setPassengerList: (flightNo) => dispatch(passengerList(flightNo))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckIn);
