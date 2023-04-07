import React, { useState } from "react";
import "../style/ConversionTables.css";

const ConversionTables = () => {
  const options = [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000",
  ];

  const [mins, setMins] = useState("");
  const [secs, setSecs] = useState("");
  const [watts, setWatts] = useState(options[0]);
  const [compMins, setCompMins] = useState("");
  const [compSecs, setCompSecs] = useState("");
  const [compWatts, setCompWatts] = useState("");

  function returnAns() {
    var calcSecs = parseInt(mins) * 60 + parseInt(secs);
    console.log(calcSecs);
    var answerSecs = calcSecs * 4;
    console.log(answerSecs);
    var temp = 100 + watts / 10;
    console.log(temp);
    var ansMins = answerSecs / 60;
    console.log(ansMins);
    var ansSecs = answerSecs % 60;
    console.log(ansSecs);

    setCompMins(function () {
      return <div>{parseInt(ansMins)}</div>;
    });
    setCompSecs(function () {
      return <div>{parseInt(ansSecs)}</div>;
    });
    setCompWatts(function () {
      return <div>{parseInt(temp)}</div>;
    });
  }

  return (
    <div id="contents">
      <div>Microwave time</div>
      <div id="inputs">
        <div className="ui input">
          <input
            type="text"
            placeholder="Mins"
            value={mins}
            onChange={(e) => setMins(e.target.value)}
          />
        </div>
        <div id="time">Mins</div>
        <div className="ui input">
          <input
            type="text"
            placeholder="Secs"
            value={secs}
            onChange={(e) => setSecs(e.target.value)}
          />
        </div>
        <div id="time">Secs</div>
        <form>
          <select
            className="ui dropdown"
            value={watts}
            onChange={(e) => setWatts(e.target.value)}
          >
            {options.map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </select>
        </form>
        <div id="time">Watts</div>
      </div>
      <div id="button-item">
        <button
          className="ui compact icon button"
          onClick={returnAns}
          id="button"
        >
          <i className="arrows alternate horizontal icon"></i>
        </button>
      </div>
      <div id="outputs">
        <div></div>
        <div className="ui visible message" id="space">
          <p>{compMins}</p>
        </div>
        <div id="time">Mins</div>
        <div className="ui visible message" id="space">
          <p>{compSecs}</p>
        </div>
        <div id="time">Secs</div>
        <div className="ui visible message" id="space">
          <p>{compWatts}</p>
        </div>
        <div id="time">Temp (°C)</div>
      </div>
      <div id="bottom-color">Oven time</div>
    </div>
  );
};

export default ConversionTables;
