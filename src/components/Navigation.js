import React from "react";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div className="ui menu">
        <div className="header item">
          <Link to="/">MicrowaveToOven CONVERTER</Link>
        </div>

        <div className="item">
          <Link to="/">Home</Link>
        </div>
        <div className="item">
          <Link to="/contacts">Contacts</Link>
        </div>
      </div>
    );
  }
}

export default Navigation;
