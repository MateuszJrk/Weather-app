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
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      this.props.fetchCurrentLocation(lat, lon);
      this.props.fetchConditions(lat, lon);
      this.props.fetchForecast(lat, lon);
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
    const { name, main, wind, sys } = this.props.data.weatherinfo;
    if (this.props.data.weatherinfo.hasOwnProperty("name")) {
      details = (
        <div className="mt-3 ">
          <h3>
            <div className="square">
              Searching for: <em>{name}</em>
            </div>
          </h3>
          <div className="square">
            <h4>Current time: {new Date().toLocaleTimeString()}</h4>
          </div>
          <div className="square">
            <h4>Temperature: {main.temp} &#176;C </h4>
          </div>
          <div className="square">
            <h4>Wind: {wind.speed} m/s</h4>
          </div>
          <div className="square">
            <h4>Pressure: {main.pressure} hPa</h4>
          </div>
          <div className="square">
            <h4>
              Sunrise: {new Date(sys.sunrise * 1000).toLocaleTimeString()}
            </h4>
          </div>
          <div className="square">
            <h4>Sunset: {new Date(sys.sunset * 1000).toLocaleTimeString()}</h4>
          </div>
        </div>
      );
    } else {
      details = <p className="mt-3">You need to type a city</p>;
    }
    return (
      <div className="container">
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
      fetchWeather,
      fetchCurrentLocation,
      fetchConditions,
      fetchForecast
    },
    dispatch
  );

export default connect(mapStatetoProps, mapDispatchToProps)(SearchLocation);
