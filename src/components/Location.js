import React from "react";
import { connect } from "react-redux";
import { fetchCurrentLocation } from "../actions/fetchWeather";
import { bindActionCreators } from "redux";

class Location extends React.Component {
  state = {};

  render() {
    const conditions = JSON.parse(window.localStorage.getItem("conditions"));
    console.log(conditions);
    return (
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
  }
}
const mapStatetoProps = state => {
  console.log(state);
  return { data: state };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchCurrentLocation
    },
    dispatch
  );

export default connect(mapStatetoProps, mapDispatchToProps)(Location);
