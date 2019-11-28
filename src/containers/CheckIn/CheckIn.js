import React, { Component } from "react";
import { connect } from "react-redux";

import Passengers from "./../../components/Passengers/Passengers";

import { mockData } from "./../../tools/mockData";

class CheckIn extends Component {
  state = {
    passengers: []
  };
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
    let passengers = this.getPassengers(this.getFlightNo());
    this.setState({
      ...this.state,
      passengers
    });
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
    pasengrs: state.passengers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setPassengerList: () => dispatch({ type: "PASSENGER_LIST" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckIn);
