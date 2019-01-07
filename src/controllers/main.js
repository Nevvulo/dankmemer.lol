const config = require('../../config.json');
module.exports = {
  async view (req, res, next) {
    res.render('index.ejs', { config: config});
  }
}
