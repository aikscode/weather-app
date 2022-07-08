const request = require("request");

const API_KEY = "c366a1aee90d3e06ecf8b38f0896394b";
const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=37.267,-122.4233&units=f`;

request({ url: url, json: true }, (error, response) => {
  const data = response.body;
  console.log(
    data.current.weather_descriptions[0] +
      " it's currently " +
      data.current.temperature +
      " degrees out. But it feels like " +
      data.current.feelslike +
      " degrees"
  );
});
