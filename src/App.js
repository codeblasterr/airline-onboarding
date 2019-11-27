import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navigation from  './components/Navigation/Navigation';
import Home from './containers/Home/Home';
import AddUser from './components/AddUser/AddUser';
import CheckIn from './components/CheckIn/CheckIn';
import InFlight from './components/InFlight/InFlight';

import './App.scss';


function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Route path="/" exact component={Home}/>
        <Route path="/flights/check-in" component={CheckIn}/>
        <Route path="/flights/in-flight" component={InFlight}/>
        <Route path="/add-user" component={AddUser}/>
      </div>
    </Router>
  );
}

export default App;
