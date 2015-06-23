# notificatio-me for node

Howto use:

```javascript
var notificatiome = require('notificatio-me');

var hash = 'the hash from notifiaction.me';
var telegramPhoneNumber = '00411231231212';
var message = 'a message from alice to bob';

notificatiome.send(hash,telegramPhoneNumber,message)
.then(  function(success){ console.log(success)},
        function(error){console.log(error)});
```
get your api key at http://www.notificatio.me/Account/Register