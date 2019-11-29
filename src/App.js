import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navigation from  './components/Navigation/Navigation';
import Home from './containers/Home/Home';
import AddOrUpdateUser from './containers/AddOrUpdateUser/AddOrUpdateUser';
import CheckIn from './containers/CheckIn/CheckIn';
import InFlight from './containers/InFlight/InFlight';
import Footer from './components/Footer/Footer';
import Login from './containers/Login/Login';

import ErrorBoundary from './containers/ErrorBoundary/ErrorBoundary'; 

import './App.scss';


function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <ErrorBoundary>
          <main>
            <Route path="/" exact component={Home}/>
            <Route path="/flights/check-in" component={CheckIn}/>
            <Route path="/flights/in-flight" component={InFlight}/>
            <Route path="/add-or-update-user" component={AddOrUpdateUser}/>
            <Route path="/login" component={Login} />
          </main>
        </ErrorBoundary>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
