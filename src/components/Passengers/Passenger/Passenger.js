import React from 'react';

import Batch from './../../Batch/Batch';

import './../../../App.scss';
import './Passenger.scss';

const passenger = (props) => {
    console.log("Props", props);
    return (
        <div className="pasngr-item">
            <div className="psngr-info-cont">
                <div className="psngr-lable">Name:</div> 
                <div className="psngr-content">{props.passenger.name}</div>
            </div>
            <div className="psngr-info-cont">
                <div className="psngr-lable">Seat No:</div> 
                <div className="psngr-content">{props.passenger.seatNo}</div>
            </div>
            {props.checkIn ?
                <>
                <div className="psngr-info-cont">
                    <div className="psngr-lable">With Infant:</div> 
                    <div className="psngr-content">
                        <Batch status={props.passenger.withInfant} />
                    </div>
                </div>
                <div className="psngr-info-cont">
                    <div className="psngr-lable">Need Wheel Chair:</div> 
                    <div className="psngr-content">
                        <Batch status={props.passenger.requireWheelChair} />
                    </div>
                </div>
                <div className="psngr-info-cont">
                    <div className="psngr-lable">Ancilary services:</div> 
                    <div className="psngr-content">
                        {props.passenger.ancilaryServices}
                    </div>
                </div> </> : <div className="psngr-info-cont">
                    <div className="psngr-lable">Opted Special Meal:</div> 
                    <div className="psngr-content">
                        <Batch status={props.passenger.specialMeals} />
                    </div>
                </div>
            }
            <div className="psngr-info-cont">
                <div className="psngr-lable">Checked In:</div> 
                <div className="psngr-content">
                    <Batch status={props.passenger.checkedIn} />
                </div>
            </div>
            <div className="container flex-end">
                <button className="btn-filled" onClick={
                    () => {
                        props.history.push(`/add-or-update-user?flightNo=${props.flightNo}&passengerId=${props.passenger.id}`)
                    }
                }>Edit</button>
            </div>
        </div>
    );
}

export default passenger;