import React from 'react';
import {Route, NavLink} from 'react-router-dom';

import Home from '../../containers/Home/Home';
import AddUser from '../AddUser/AddUser';
import CheckIn from '../CheckIn/CheckIn';
import InFlight from '../InFlight/InFlight';


import './Navigation.scss';

export default function Navigation() {
    return (
    <>
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" exact>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/flights">Flights</NavLink>
                    </li>
                    <li>
                        <NavLink to="/add-user">Add User</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        <Route path="/" exact component={Home}/>
        <Route path="/flights/check-in" component={CheckIn}/>
        <Route path="/flights/in-flight" component={InFlight}/>
        <Route path="/add-user" component={AddUser}/>
    </>
    );
}