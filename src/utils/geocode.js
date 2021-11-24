const request = require("request");

const geocode = (address, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=9493670eab2987265927ec51357e61a8&query=" +
    encodeURIComponent(address) +
    "&units=f";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(undefined, {
        temperature: response.body.current.temperature,
        description: response.body.current.weather_descriptions,
      });
    }
  });
};

module.exports = geocode;
