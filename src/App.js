import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.scss";

const Navigation = lazy(() => import("./components/Navigation/Navigation"));
const AddOrUpdateUser = lazy(() =>
  import("./containers/AddOrUpdateUser/AddOrUpdateUser")
);
const InFlight = lazy(() => import("./containers/InFlight/InFlight"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Login = lazy(() => import("./containers/Login/Login"));
const Home = lazy(() => import("./containers/Home/Home"));
const CheckIn = lazy(() => import("./containers/CheckIn/CheckIn"));

const App = props => {
  return (
    <Router>
      <Suspense fallback={() => <div>Loading....</div>}>
        <div className="App">
          <Navigation {...props} />
          <main>
            <Route path="/" exact component={Home} />
            <Route path="/flights/check-in" component={CheckIn} />
            <Route path="/flights/in-flight" component={InFlight} />
            <Route path="/add-or-update-user" component={AddOrUpdateUser} />
            <Route path="/login" component={Login} />
          </main>
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
};

export default App;
