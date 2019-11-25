import React from 'react';
import {Route, Link} from 'react-router-dom';

import './Navigation.scss';

export default function Navigation() {
    return (
    <>
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to={{
                            pathname : '/',
                            hash: 'check-in'
                        }}>Check-in</Link>
                    </li>
                    <li>
                        <Link to={{
                            pathname : '/',
                            hash: 'in-flight'
                        }}>In-Flight</Link>
                    </li>
                    <li>
                        <Link to={{
                            pathname : '/',
                            hash: 'admin'
                        }}>Admin</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <Route path="/" exact render={() => <h1>Home</h1>}/>
    </>
    );
}