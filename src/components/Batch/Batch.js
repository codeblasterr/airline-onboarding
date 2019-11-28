import React from 'react';

import './Batch.scss';

const batch = (props) => {
    return props.status ? <span className="batch-success">Yes</span> : <span className="batch-failiure">No</span> 
}

export default batch;