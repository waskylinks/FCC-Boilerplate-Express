require('dotenv').config()

let express = require('express');
let app = express();

//middleware to serve static assets(css,images)
//app.use('/public', express.static(__dirname + '/public'))

//let absolutePath = __dirname + '/views/index.html'


app.get('/json', (req, res) => {
  let message = process.env.MESSAGE_STYLE === 'uppercase'
    ? "HELLO JSON"
    : "Hello json";
    res.json({ "message": message });
  });






































 module.exports = app;
