const APIKey = "efa2ef11f117f7485b2fca8e87a3a2f5";
export function fetchWeather(city) {
  return function(dispatch) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKey}&units=metric`
    )
      .then(res => {
        return res.json();
      })
      .then(JSONres => {
        dispatch({ type: "FETCH_WEATHER", payload: JSONres });
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function fetchCurrentLocation(lat, lon) {
  return function(dispatch) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}&units=metric`
    )
      .then(res => {
        return res.json();
      })
      .then(JSONres => {
        dispatch({ type: "FETCH_CURRENT_LOCATION", payload: JSONres });
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function fetchConditions(lat, lon) {
  return function(dispatch) {
    fetch(
      `https://airapi.airly.eu/v2/measurements/nearest?lat=${lat}&lng=${lon}&apikey=xMhrRgSFnTQs49zooOjITuVjxuPqBV2H`
    )
      .then(res => {
        return res.json();
      })
      .then(JSONres => {
        dispatch({
          type: "FETCH_AIR_CONDITIONS",
          payload: JSONres
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
}
export function fetchForecast(lat, lon) {
  return function(dispatch) {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}&units=metric`
    )
      .then(res => {
        return res.json();
      })
      .then(JSONres => {
        dispatch({ type: "FETCH_FORECAST", payload: JSONres });
      })
      .catch(err => {
        console.log(err);
      });
  };
}
