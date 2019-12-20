import React from "react";

const LongRangeWeather = () => {
  let conditions = "";
  if (JSON.parse(window.localStorage.getItem("conditions"))) {
    conditions = JSON.parse(window.localStorage.getItem("conditions"));
  } else {
    conditions = "";
  }
  console.log(conditions);

  let details = "";
  if (conditions.conditions.current) {
    details = (
      <table className="table mt-4">
        <thead>
          <tr>
            <th></th>
            <th scope="col" className="square">
              Tomorrow
            </th>
            <th scope="col" className="square">
              {conditions.forecast.list[10].dt_txt.slice(0, 10)}
            </th>
            <th scope="col" className="square">
              {conditions.forecast.list[18].dt_txt.slice(0, 10)}
            </th>
            <th scope="col" className="square">
              {conditions.forecast.list[26].dt_txt.slice(0, 10)}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="square">Temp</td>
            <td className="square">
              {conditions.forecast.list[0].main.temp} &#176;C{" "}
            </td>
            <td className="square">
              {conditions.forecast.list[10].main.temp} &#176;C
            </td>
            <td className="square">
              {conditions.forecast.list[18].main.temp} &#176;C
            </td>
            <td className="square">
              {conditions.forecast.list[26].main.temp} &#176;C
            </td>
          </tr>
          <tr>
            <td className="square">Weather</td>
            <td className="square">
              {conditions.forecast.list[0].weather[0].main}{" "}
            </td>
            <td className="square">
              {conditions.forecast.list[10].weather[0].main}
            </td>
            <td className="square">
              {conditions.forecast.list[18].weather[0].main}
            </td>
            <td className="square">
              {conditions.forecast.list[26].weather[0].main}
            </td>
          </tr>
          <tr>
            <td className="square">Pressure</td>
            <td className="square">
              {conditions.forecast.list[0].main.pressure} hPa{" "}
            </td>
            <td className="square">
              {conditions.forecast.list[10].main.pressure} hPa
            </td>
            <td className="square">
              {conditions.forecast.list[18].main.pressure} hPa
            </td>
            <td className="square">
              {conditions.forecast.list[26].main.pressure} hPa
            </td>
          </tr>
        </tbody>
      </table>
    );
  } else {
    details = <p>Please allow location</p>;
  }

  return <div>{details}</div>;
};
export default LongRangeWeather;
