import React from 'react';
import {NavLink} from 'react-router-dom';

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
                        <NavLink to="/flights/check-in">Check-in</NavLink>
                    </li>
                    <li>
                        <NavLink to="/flights/in-flight">In Flights</NavLink>
                    </li>
                    <li>
                        <NavLink to="/add-user">Add User</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    </>
    );
}