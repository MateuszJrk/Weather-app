const initialState = {
  weatherinfo: [],
  location: [],
  conditions: null,
  forecast: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "FETCH_WEATHER":
      return {
        ...state,
        weatherinfo: action.payload
      };
    case "FETCH_CURRENT_LOCATION":
      return {
        ...state,
        location: action.payload
      };
    case "FETCH_AIR_CONDITIONS":
      return {
        ...state,
        conditions: action.payload
      };

    case "FETCH_FORECAST":
      return {
        ...state,
        forecast: action.payload
      };

    default:
      return state;
  }
}
