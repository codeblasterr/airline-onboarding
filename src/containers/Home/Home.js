import React, {Component} from 'react';
import DataTable, {memoize} from 'react-data-table-component';
import {connect} from 'react-redux';

import {flightList} from './../../stores/actions/Flights';

import './../../App.scss'

const column = memoize( (navigateToCheckinPage, navigateToInFlightPage) => [
    {
        name: 'No',
        selector: 'number',
        sortable: true
    },
    {
        name: 'Name',
        selector: 'name',
        sortable: true
    },
    {
        name: 'Ancilary services',
        selector: 'ancilaryServices',
        sortable: false,
        cell: row => {
            let data = (row.ancilaryServices && row.ancilaryServices.length) ? row.ancilaryServices.join(',') : '-';
            return <div>{data}</div>;
        }
    },
    {
        name: 'Scheduled Time',
        selector: 'scheduledTime',
        sortable: true
    },
    {
        cell: row => {
            return (<>
                <button className="btn-outline" onClick={() => navigateToCheckinPage(row.number)}>Check-in</button>
                <button className="btn-filled" onClick={() => navigateToInFlightPage(row.number)}>In-flight</button>
            </>);
        }
    }
]);

class Home extends Component {
       
    navigateToCheckinPage = flightNo => {
        this.props.history.push(`/flights/check-in?flightNo=${flightNo}`);
    }
    navigateToInFlightPage = flightNo => {
        this.props.history.push(`/flights/in-flight?flightNo=${flightNo}`);
    }
    componentDidMount() {
        this.props.setFlightList();
    }
    render() {
        return (
            <div className="card">
                <DataTable 
                    title = 'Flights'
                    data = {this.props.flits}
                    columns = {column(this.navigateToCheckinPage, this.navigateToInFlightPage)}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        flits: state.flts.flights,
        isSignedIn: state.auth.isSignedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setFlightList: () => dispatch(flightList())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);