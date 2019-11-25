import React from 'react';
import {Route, NavLink} from 'react-router-dom';

import Home from '../Home/Home';
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
                        <NavLink to="/check-in">Check-in</NavLink>
                    </li>
                    <li>
                        <NavLink to="/in-flight">In-Flight</NavLink>
                    </li>
                    <li>
                        <NavLink to="/add-user">Add User</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        <Route path="/" exact component={Home}/>
        <Route path="/check-in" component={CheckIn}/>
        <Route path="/in-flight" component={InFlight}/>
        <Route path="/add-user" component={AddUser}/>
    </>
    );
}