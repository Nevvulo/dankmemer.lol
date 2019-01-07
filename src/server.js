const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('../config.json');
const port = config.port || 3000;

//set up parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('views', `${__dirname}/pages`)
app.set('view engine', 'ejs')

// Load the rest of the local files
app.use('/styles', express.static(`${__dirname}/styles`))
const mainController = require("./controllers/main")

app.get('/source', (req, res) => {
  res.status(200).sendfile('./source.zip');
})

app.get("/", mainController.view)

app.listen(port, '127.0.0.1');
