import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navigation from  './components/Navigation/Navigation';
import Home from './containers/Home/Home';
import AddUser from './components/AddUser/AddUser';
import CheckIn from './containers/CheckIn/CheckIn';
import InFlight from './containers/InFlight/InFlight';
import Footer from './components/Footer/Footer';

import './App.scss';


function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main>
          <Route path="/" exact component={Home}/>
          <Route path="/flights/check-in" component={CheckIn}/>
          <Route path="/flights/in-flight" component={InFlight}/>
          <Route path="/add-user" component={AddUser}/>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
