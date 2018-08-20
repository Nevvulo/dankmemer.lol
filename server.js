const Express = require('express');
const router = Express.Router();
const app = Express();
const port = 80;
const subD = require('express-subdomain')

app.use(subD('bugs', router))
app.set('trust proxy', true)

//Serve static files
app.use('/', Express.static('./build/static'));

router.get('/', async (req, res) => { // TODO: [Markdown?]
  return res.send('hello?')
})

app.get('*', function (request, response){
  response.sendFile(`${__dirname}/build/static/index.html`);
})

//api specific routes
router.get('/', function(req, res) {
  res.send('oh hello');
});

app.listen(port);
