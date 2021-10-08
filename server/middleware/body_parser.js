let bodyParser = require('body-parser')

const myBodyParser = function(res, res ,next){
  // parse application/x-www-form-urlencoded
 bodyParser.urlencoded({ extended: false })
 bodyParser.json()
  next()
}


module.exports = myBodyParser;