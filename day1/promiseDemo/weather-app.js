var weather = require("./weather.js");
var location = require('./location.js');

var argv = require('yargs').option('location', {
        alias: 'l',
        demand: false,
        describe: 'Enter the location to fetch weather',
        type: 'string'
    }).help('help')
    .argv;

if (typeof argv.l === 'string' && argv.l.length > 0) {
    console.log('location was provided');
    weather(argv.l).then(function (currentWeather) {
        console.log(currentWeather);
    }).catch(function (error) {
        console.log(error);
    });
} else {
    console.log('location was not provided');
    location().then(function (location) {
        //console.log(cb);
        weather(location.city + ',' + location.country).then(function (currentWeather) {
            console.log(currentWeather);
        }).catch(function (error) {
            console("Unable to get Weather for the location: " + location.city, " due to error:", error);
        });
    }).catch(function (error) {
        console.log('Unable to guess location', error);
    });
}