/**
 * Created by longstone on 23/06/15.
 */
'use strict';
var request = require('request');
var stripMobile = require('./stripMobile');

module.exports = {

    send: function sendF(apiHash, phoneNumber, message) {

        var promise = new Promise(function (resolve, reject) {

            var options = {
                json: {
                    phoneNumber: stripMobile(phoneNumber),
                    apiHash: apiHash,
                    message: message
                }
            };

            request.post('http://www.api.notificatio.me/v1/user/message', options, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    resolve(options.message);
                } else {
                    reject(Error(error));
                }
            });

        });
        return promise;

    }
};

