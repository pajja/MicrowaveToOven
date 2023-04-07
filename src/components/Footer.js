import React from "react";
import "../style/Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="ui inverted vertical footer segment" id="footer">
        <div className="ui container" id="text">
          Developed by Matas Pajarskas. All Rights Reserved
        </div>
      </div>
    );
  }
}

export default Footer;
