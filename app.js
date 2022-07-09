const request = require("request");

const API_KEY_WEATHERSTACK = "c366a1aee90d3e06ecf8b38f0896394b";
const url_weatherStack = `http://api.weatherstack.com/current?access_key=${API_KEY_WEATHERSTACK}&query=37.267,-122.4233&units=f`;
const API_KEY_POSITIONSTACK = "bda2476a8958e2fd93c63d20769998ba";
const url_positionStack = `http://api.positionstack.com/v1/forward?access_key=${API_KEY_POSITIONSTACK}&query=1600%20Pennsylvania%20Ave%20NW,%20Washington%20DC`;

request({ url: url_weatherStack, json: true }, (error, response) => {
  const dataWeather = response.body;
  console.log(
    dataWeather.current.weather_descriptions[0] +
      " it's currently " +
      dataWeather.current.temperature +
      " degrees out. But it feels like " +
      dataWeather.current.feelslike +
      " degrees"
  );
});

request({ url: url_positionStack, json: true }, (error, response) => {
  const dataGeocode = response.body.data[0];

  console.log(
    "The longitude is " +
      dataGeocode.longitude +
      " and the latitude is " +
      dataGeocode.latitude
  );
});
