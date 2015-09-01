/**
 * Created by longstone on 23/06/15.
 */
'use strict';
var request = require('request');
var stripMobile = require('./stripMobile');

module.exports = {
    /**
     * Let you send a message to a telegram number
     * @param apiHash the hashcode you receive from notificatio.me
     * @param phoneNumber you want to send a message
     * @param message (max 1000 chars)
     * @returns {Promise} returns the sent message or in case of failure an error
     */
    
    send: function sendF(config) {

        var promise = new Promise(function (resolve, reject) {

            var options = {
                json: {
                    phoneNumber: stripMobile(config.phoneNumber),
                    apiHash: config.apiHash,
                    message: config.message
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

