const Express = require('express');
const app = Express();
const bodyParser = require('body-parser')
const keys = require('./keys.json');
const config = require('./config.json')
const port = config.port || 3000;

//set up parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//handle posting of commands to the server
app.post('/api/cmds', (req, res) => {
  if(keys.includes(req.headers.authorization)) {
    commands = req.body.commands;
    res.status(200).send({status: 'ok'});
  }
  else {
    res.status(401).send({error: 'Get away you sick filth.'});
  }
  
})

app.get('/source', (req, res) => {
  res.status(200).sendfile('./source.zip');
})

app.get('*', (req, res) => {
  res.status(200).send('Hello world')
})

app.listen(port, '127.0.0.1')
