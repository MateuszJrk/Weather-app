import React from "react";

// need to fix error when user doesn't allow location

const Location = () => {
  const conditions = JSON.parse(window.localStorage.getItem("conditions"));

  const { values, indexes } = conditions.conditions.current;
  const { name } = conditions.location;
  // checking if location coord are available
  let details =
    conditions.location.coord.lat &&
    conditions.location.hasOwnProperty("name") ? (
      <div className="mt-3 container">
        <div className="square">
          <h3>
            Your current location: <em>{name}</em>
          </h3>
        </div>
        <div className="square">
          <h4>Current time: {new Date().toLocaleTimeString()}</h4>
        </div>
        <div className="square">
          <h4>Temperature: {values[5].value} &#176;C </h4>
        </div>
        <div className="square ">
          <h4>Pressure: {values[3].value} hPa</h4>
        </div>
        <div className="square mt-5">
          <h3>Air conditions:</h3>
        </div>
        <div className="square">
          <h4>
            Level of pollution: {indexes[0].value}({indexes[0].level})
          </h4>
        </div>
        <div className="square">
          {" "}
          <h4>Decription: {indexes[0].description}</h4>
        </div>
        <div className="square">
          <h4>Advice: {indexes[0].advice}</h4>
        </div>
      </div>
    ) : (
      <p>Please allow location</p>
    );
  return details;
};

export default Location;
