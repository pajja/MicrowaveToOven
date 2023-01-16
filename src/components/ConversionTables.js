import React, { useState } from "react";

const ConversionTables = () => {
  const [term, setTerm] = useState("");
  const [component, setComponent] = useState("");

  function returnOutput() {
    setComponent(function () {
      return <div>{term}</div>;
    });
  }

  return (
    <div>
      <div className="ui input">
        <input
          type="text"
          placeholder="Input..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
      <button className="ui compact icon button" onClick={returnOutput}>
        <i className="arrows alternate horizontal icon"></i>
      </button>
      <div class="ui visible message">
        <p>{component}</p>
      </div>
    </div>
  );
};

export default ConversionTables;
