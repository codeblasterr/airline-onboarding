import React, {Component} from 'react';
import DataTable, {memoize} from 'react-data-table-component';

import {mockData} from './../../tools/mockData';

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
    state =  {
        flights : []
    }
    getAirlineData = () => {
        let data = mockData && mockData.flightInfo ? mockData.flightInfo : [];
        let date = new Date();
        let curHours = date.getHours() <= 9 ? '0' + date.getHours() : date.getHours();
        let curMinutes = date.getMinutes() <= 9 ? '0' + date.getMinutes() : date.getMinutes();
        let time = curHours + ':' + curMinutes;
        data = data.filter(flight => flight.scheduledTime > time).sort((a,b) => {
            if(a.scheduledTime > b.scheduledTime) return 1;
            if(a.scheduledTime < b.scheduledTime) return -1;
            return 0;
        });
        return data;
    }
    navigateToCheckinPage = flightNo => {
        this.props.history.push('/flights/check-in');
    }
    navigateToInFlightPage = flightNo => {
        this.props.history.push('/flights/in-flight');
    }
    componentDidMount() {
        let data = this.getAirlineData();
        console.log(data);
        
        this.setState({
            ...this.state,
            flights: [...data]
        })
    }
    render() {
        return (
            <div className="card">
                <DataTable 
                    title = 'Flights'
                    data = {this.state.flights}
                    columns = {column(this.navigateToCheckinPage, this.navigateToInFlightPage)}
                />
            </div>
        );
    }
}

export default Home;