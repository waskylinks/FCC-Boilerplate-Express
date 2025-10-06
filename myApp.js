let express = require('express');
let app = express();

//middleware to serve static assets(css,images)
//app.use('/public', express.static(__dirname + '/public'))

//let absolutePath = __dirname + '/views/index.html'

app.get('/', (req, res) => {
  res.json({"message": "Hello json"})
});






































 module.exports = app;
