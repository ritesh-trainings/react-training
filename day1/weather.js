var request = require("request");


module.exports = function (location, callback) {
    var encodedLocation = encodeURIComponent(location);
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&appid=2af59aa6a3e7a09b7dca1037d80e6e8e&units=metric';

    if (!location) {
        return callback('No location provided');
    }
    request({
        url: url,
        json: true
    }, function (error, response, body) {
        if (error)
            callback("Unable to fetch weather data");
        else
            callback("It\'s " + body.main.temp + "\u00B0C temperature, " + body.main.humidity + " humidity and " +body.main.pressure + " pressure in " + body.name + "!");
    });
};

console.log("After Request");