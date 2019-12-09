import React from "react";
import { NavLink } from "react-router-dom";

import { getSearchParams } from "./../../utils/util";

import "./Navigation.scss";

const Navigation = props => {
  let search = getSearchParams();
  let additionalMenu = null;
  if (search.flightNo && search.passengerId) {
    additionalMenu = (
      <>
        <li>
          <NavLink to="/flights/check-in">Check-in</NavLink>
        </li>
        <li>
          <NavLink to="/flights/in-flight">In Flights</NavLink>
        </li>
        <li>
          <NavLink to="/add-or-update-user">Add Or Update User</NavLink>
        </li>
      </>
    );
  }
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            {additionalMenu}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
