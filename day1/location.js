var request = require("request");
var url = "https://ipinfo.io/";

module.exports = function (callback) {
    request({
        url: url,
        json: true
    }, function (error, response, body) {
        if (error) {
            callback("Error in getting location");
        } else
            callback(body);
    });
};