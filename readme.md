
Howto use:

```javascript
var notificatiome = require('notificatio-me');
notificatiome.send('hash-from-notficatiome','1234567890','textmessage, 1000 chars..')
.then(function(success){ console.log(success)},function(error){console.log(error)});
```
get your api key at http://www.notificatio.me/Account/Register