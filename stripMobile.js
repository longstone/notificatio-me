/**
 * removes leading + or 0 from a mobile number, does nothing if there is no such a leading sign
 * @param phoneNumber
 * @returns {*}
 */
var stripMobile = function stripMobileF(phoneNumber ){
    if (phoneNumber.indexOf('+') === 0 ||
        phoneNumber.indexOf('0') === 0) {
        return stripMobile(phoneNumber.substr(1, phoneNumber.length))
    }
    return phoneNumber;
};
module.exports = stripMobile;