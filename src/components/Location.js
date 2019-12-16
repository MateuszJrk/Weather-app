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
        <h3>
          Your current location: <em>{conditions.location.name}</em>
        </h3>
        <h4>Current time: {new Date().toLocaleTimeString()}</h4>

        <h4>
          Temperature: {conditions.conditions.current.values[5].value} &#176;C{" "}
        </h4>

        <h4>Pressure: {conditions.conditions.current.values[3].value} hPa</h4>

        <h3 className="mt-4">Air conditions:</h3>
        <h4>
          Level of pollution: {conditions.conditions.current.indexes[0].value}(
          {conditions.conditions.current.indexes[0].level})
        </h4>
        <h4>
          Decription: {conditions.conditions.current.indexes[0].description}
        </h4>
        <h4>Advice: {conditions.conditions.current.indexes[0].advice}</h4>
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
