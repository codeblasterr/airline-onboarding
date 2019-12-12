import React, { Component } from "react";
import { connect } from "react-redux";

import Seat from "../../components/Seat/Seat";
import { getSearchParams } from "./../../utils/util";
import { updatePassenger } from "./../../stores/actions/Flight";

import "./Seats.scss";

class Seats extends Component {
  checkinPassenger = (seatNo, elem) => {
    let params = getSearchParams();
    let isSelect = !elem.target.classList.contains("active");
    let values = {
      checkedIn: isSelect
    };

    this.props.updatePassenger(params.flightNo, params.passengerId, values);
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

const mapDispatchToProps = dispatch => {
  return {
    updatePassenger: (flightNo, filterParam, values) =>
      dispatch(updatePassenger(flightNo, filterParam, values))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Seats);
