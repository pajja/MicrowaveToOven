import React from "react";
import { Link } from "react-router-dom";
import "../style/Navigation.css";

class Navigation extends React.Component {
  render() {
    return (
      <div className="ui menu">
        <div className="header item">
          <Link to="/" id="nav-header">
            MicrowaveToOven CONVERTER
          </Link>
        </div>
        <div id="items">
          <div className="item">
            <Link to="/" id="nav-item">
              Home
            </Link>
          </div>
          <div className="item">
            <Link to="/contacts" id="nav-item">
              Contacts
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
