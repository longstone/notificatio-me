var stripMobile = function stripMobileF(phoneNumber ){
    if (phoneNumber.indexOf('+') === 0 ||
        phoneNumber.indexOf('0') === 0) {
        return stripMobile(phoneNumber.substr(1, phoneNumber.length))
    }
    return phoneNumber;
};
module.exports = stripMobile;