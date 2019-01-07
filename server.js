const Express = require('express');
const app = Express();
const bodyParser = require('body-parser');
const port = config.port || 3000;

//set up parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/source', (req, res) => {
  res.status(200).sendfile('./source.zip');
})

app.get('*', (req, res) => {
  res.status(200).send('Hello world');
})

app.listen(port, '127.0.0.1');
