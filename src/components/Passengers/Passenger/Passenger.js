import React from 'react';

import Batch from './../../Batch/Batch';

import './Passenger.scss';

const passenger = (props) => {
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
                        {props.passenger.ancilaryServices.join(',')}
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
        </div>
    );
}

export default passenger;