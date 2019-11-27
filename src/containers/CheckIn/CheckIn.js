import React, {Component} from 'react';

import Passengers from './../../components/Passengers/Passengers'

import {mockData} from './../../tools/mockData'

export default class CheckIn extends Component {
    state = {
        passengers : []
    }
    getPassengers(flightNo) {
        let flightInfo = mockData.flightInfo || [];
        let flight = flightInfo.filter(flight => flight.number === parseInt(flightNo));
        return flight && flight[0].passengerInfo ? flight[0].passengerInfo : [];
    }
    getFlightNo() {
        let search = this.props.location.search || "{}";
        let searchObj = JSON.parse('{"' + decodeURI(search).replace('?', '').replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
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
                <Passengers passengers={[...this.state.passengers]} />
            </>
        );
    }
}