import React from "react";

// need to fix error when user doesn't allow location and refreshes the page

const Location = () => {
  let conditions = "";
  if (JSON.parse(window.localStorage.getItem("conditions"))) {
    conditions = JSON.parse(window.localStorage.getItem("conditions"));
  } else {
    conditions = "";
  }

  let details = "";
  if (conditions.conditions.current) {
    details = (
      <div className="mt-3 container">
        <div className="square">
          <h3>
            Your current location: <em>{conditions.location.name}</em>
          </h3>
        </div>
        <div className="square">
          <h4>Current time: {new Date().toLocaleTimeString()}</h4>
        </div>
        <div className="square">
          <h4>
            Temperature: {conditions.conditions.current.values[5].value} &#176;C{" "}
          </h4>
        </div>
        <div className="square ">
          <h4>Pressure: {conditions.conditions.current.values[3].value} hPa</h4>
        </div>
        <div className="square mt-5">
          <h3>Air conditions:</h3>
        </div>
        <div className="square">
          <h4>
            Level of pollution: {conditions.conditions.current.indexes[0].value}
            ({conditions.conditions.current.indexes[0].level})
          </h4>
        </div>
        <div className="square">
          {" "}
          <h4>
            Decription: {conditions.conditions.current.indexes[0].description}
          </h4>
        </div>
        <div className="square">
          <h4>Advice: {conditions.conditions.current.indexes[0].advice}</h4>
        </div>
      </div>
    );
  } else {
    details = <p>Please allow location</p>;
  }

  return <div>{details}</div>;
};

export default Location;
