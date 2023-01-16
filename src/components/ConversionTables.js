import React from "react";

const Input = () => {
  return (
    <div className="ui input">
      <input type="text" placeholder="Input..." />
    </div>
  );
};

const Output = () => {
  return (
    <div>
      <button className="compact ui button">Output</button>
    </div>
  );
};

class ConversionTables extends React.Component {
  render() {
    return (
      <div>
        <div>{Input()}</div>
        <button className="ui compact icon button">
          <i className="arrows alternate horizontal icon"></i>
        </button>
        <div>{Output()}</div>
      </div>
    );
  }
}

export default ConversionTables;
