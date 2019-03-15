var request = require("request");
var url = "https://ipinfo.io/";

module.exports = function () {
    return new Promise(function (resolve, reject) {
        request({
            url: url,
            json: true
        }, function (error, response, body) {
            if (error) {
                reject("Error in getting location");
            } else
                resolve(body);
        });
    });
};