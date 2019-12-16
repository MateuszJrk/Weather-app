import React from "react";
import { connect } from "react-redux";
import { fetchCurrentLocation } from "../actions/fetchWeather";
import { fetchWeather } from "../actions/fetchWeather";
import { fetchConditions } from "../actions/fetchWeather";
import { fetchForecast } from "../actions/fetchWeather";
import { bindActionCreators } from "redux";

class SearchLocation extends React.Component {
  state = {
    lat: "",
    lon: "",
    city: ""
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
      this.props.fetchCurrentLocation(
        position.coords.latitude,
        position.coords.longitude
      );
      this.props.fetchConditions(
        position.coords.latitude,
        position.coords.longitude
      );
      this.props.fetchForecast(
        position.coords.latitude,
        position.coords.longitude
      );
    });
  }

  render() {
    let details = "";

    window.localStorage.setItem("conditions", JSON.stringify(this.props.data));

    const getWeatherInfo = e => {
      e.preventDefault();

      if (this.state.city === "") {
        console.log("no city to search for");
      } else {
        this.props.fetchWeather(this.state.city);
      }
    };
    // this.props.fetchForecast(this.state.city);

    if (this.props.data.weatherinfo.hasOwnProperty("name")) {
      details = (
        <div className="mt-3 ">
          <h3>
            Searching for: <em>{this.props.data.weatherinfo.name}</em>
          </h3>
          <h4>Current time: {new Date().toLocaleTimeString()}</h4>

          <h4>Temperature: {this.props.data.weatherinfo.main.temp} &#176;C </h4>

          <h4>Wind: {this.props.data.weatherinfo.wind.speed} m/s</h4>
          <h4>Pressure: {this.props.data.weatherinfo.main.pressure} hPa</h4>
          <h4>
            Sunrise:{" "}
            {new Date(
              this.props.data.weatherinfo.sys.sunrise * 1000
            ).toLocaleTimeString()}
          </h4>
          <h4>
            Sunset:{" "}
            {new Date(
              this.props.data.weatherinfo.sys.sunset * 1000
            ).toLocaleTimeString()}
          </h4>
        </div>
      );
    } else {
      details = <p>You need to type a city</p>;
    }
    return (
      <>
        <form onSubmit={getWeatherInfo} className="mt-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Szukaj miasta..."
              onChange={e => this.setState({ city: e.target.value })}
            />
            <input type="submit" value="Szukaj miasta" />
            {details}
          </div>
        </form>
      </>
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
      fetchWeather,
      fetchCurrentLocation,
      fetchConditions,
      fetchForecast
    },
    dispatch
  );

export default connect(mapStatetoProps, mapDispatchToProps)(SearchLocation);
