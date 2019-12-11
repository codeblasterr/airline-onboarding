import React, { lazy } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ErrorBoundary from './containers/ErrorBoundary/ErrorBoundary';

import "./App.scss";

const Home = lazy(() => import("./containers/Home/Home"));
const AddOrUpdateUser = lazy(() => import("./containers/AddOrUpdateUser/AddOrUpdateUser"));
const CheckIn = lazy(() => import("./containers/CheckIn/CheckIn"));
const InFlight = lazy(() => import("./containers/InFlight/InFlight"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Login = lazy(() => import("./containers/Login/Login"));
const Navigation = lazy(() => import("./components/Navigation/Navigation"));

const Fallback = () => {
  return <div>Loading...</div>
}

const App = props => {
  return (
    <Router>
      <div className="App">
        <Navigation {...props} />
        <main>
          <ErrorBoundary>
            <React.Suspense fallback={() => <Fallback />}>
              <Route path="/" exact component={Home} />
              <Route path="/flights/check-in" component={CheckIn} />
              <Route path="/flights/in-flight" component={InFlight} />
              <Route path="/add-or-update-user" component={AddOrUpdateUser} />
              <Route path="/login" component={Login} />
            </React.Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
