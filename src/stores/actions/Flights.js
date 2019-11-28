import {mockData} from './../../tools/mockData';

const getAirlineData = () => {
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

export const flightList = () => {
    let flights = getAirlineData();
    return {
        type: "FLIGHT_LIST",
        payLoad: [...flights]
    }
}
