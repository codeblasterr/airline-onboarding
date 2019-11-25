import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Navigation from  './components/Navigation/Navigation';

import './App.scss';


function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
