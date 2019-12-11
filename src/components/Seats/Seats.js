import React from 'react';

import './Seats.scss';

const Seats = () => {
    let seats = [];
    let alpha = ['A', 'B', 'C'];
    for(let counter = 0; counter < alpha.length; ++counter) {
        let row = []
        for(let index = 1; index <= 10; ++index) {
            row.push(<div className="cls_seat">{alpha[counter] + index}</div>);
        }
        seats.push(<div className="cls_seatRow">{row}</div>);
    }
    return (
        <div className="cls_seatCont">
            {seats}
        </div>
    );
}

export default Seats;