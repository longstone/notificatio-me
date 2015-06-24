[![Build Status](https://travis-ci.org/longstone/notificatio-me.svg?branch=master)](https://travis-ci.org/longstone/notificatio-me)
[![Coverage Status](https://coveralls.io/repos/longstone/notificatio-me/badge.svg?branch=master)](https://coveralls.io/r/longstone/notificatio-me?branch=master)

# notificatio-me for node

Wrapps the existing api from notificatio.me for sending messages to telegram users

Howto use:

```javascript
var notificatiome = require('notificatio-me');

var hash = 'the hash from notifiaction.me';
var telegramPhoneNumber = '00411231231212';
var message = 'a message from alice to bob';

notificatiome.send(hash,telegramPhoneNumber,message)
.then( successCallback, errorCallback );
```
get your api key at http://www.notificatio.me/Account/Register