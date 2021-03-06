const http = require('http'),
  logger = require('morgan'),
  express = require('express'),
  bodyParser = require('body-parser');

let app = express()
let port = 8000;

app.use(bodyParser.json());
app.use(logger("tiny"));

app.get('/:foo/:bar', (req, res) => {
  res.json({
    message: 'Hello World!',
    data: [
      req.params.foo,
      req.params.bar
    ]});
});

app.listen(port, function (err) {
  console.log('listening on port: ' + port)
})