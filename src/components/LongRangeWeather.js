import React from "react";
import { connect } from "react-redux";
import { fetchCurrentLocation } from "../actions/fetchWeather";
import { bindActionCreators } from "redux";

class LongRangeWeather extends React.Component {
  render() {
    const conditions = JSON.parse(window.localStorage.getItem("conditions"));
    console.log(new Date(conditions.forecast.list[0].dt * 1000));
    return (
      <table className="table mt-4">
        <thead>
          <tr>
            <th></th>
            <th scope="col">Tomorrow</th>
            <th scope="col">
              {conditions.forecast.list[10].dt_txt.slice(0, 10)}
            </th>
            <th scope="col">
              {conditions.forecast.list[18].dt_txt.slice(0, 10)}
            </th>
            <th scope="col">
              {conditions.forecast.list[26].dt_txt.slice(0, 10)}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Temp</td>
            <td>{conditions.forecast.list[0].main.temp} &#176;C </td>
            <td>{conditions.forecast.list[10].main.temp} &#176;C</td>
            <td>{conditions.forecast.list[18].main.temp} &#176;C</td>
            <td>{conditions.forecast.list[26].main.temp} &#176;C</td>
          </tr>
          <tr>
            <td>Weather</td>
            <td>{conditions.forecast.list[0].weather[0].main} </td>
            <td>{conditions.forecast.list[10].weather[0].main}</td>
            <td>{conditions.forecast.list[18].weather[0].main}</td>
            <td>{conditions.forecast.list[26].weather[0].main}</td>
          </tr>
          <tr>
            <td>Pressure</td>
            <td>{conditions.forecast.list[0].main.pressure} hPa </td>
            <td>{conditions.forecast.list[10].main.pressure} hPa</td>
            <td>{conditions.forecast.list[18].main.pressure} hPa</td>
            <td>{conditions.forecast.list[26].main.pressure} hPa</td>
          </tr>
        </tbody>
      </table>
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

export default connect(mapStatetoProps, mapDispatchToProps)(LongRangeWeather);
