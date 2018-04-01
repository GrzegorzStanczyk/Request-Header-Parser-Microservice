const express = require('express');
const app = express();

app.get("/", function (req, res) {
  const ipaddress = req.header('x-forwarded-for').split(',')[0];
  const language = req.header('accept-language').split(',')[0];
  const userAgent = req.header('user-agent');
  const software = userAgent.slice(userAgent.indexOf('(') + 1, userAgent.indexOf(')'));
  res.json({
    ipaddress,
    language,
    software
  })
});

app.use((req, res, next) => {
  res.status(404).end('404');
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
